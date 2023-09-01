import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IReviews, IReviewsState, IReviewsError } from './reviewsType';
// import authHeader from '../../services/admin/header.service'

const API_URL = import.meta.env.VITE_API_URL;

const initialState: IReviewsState = {
  reviews: [],
  loading: null,
  message: null,
};

const handleRequestError = (error: AxiosError<IReviewsError>) => {
  if (window.location.hostname === 'localhost') {
    console.log(error);
  }
  if (axios.isAxiosError(error) && error.response) {
    if (error.response?.status === 401) {
      alert(error.response.data.message);
      // logout with admin
    }
    if (error.response.data.message) {
      return error.response.data.message;
    }
    if (error.message) {
      return error.message;
    }
  }
  return 'Server error';
};

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IReviews[]> = await axios.get(
        `${API_URL}/api/reviews`,
      );
      return fulfillWithValue(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(handleRequestError(error));
      }
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (reviewId: string, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/api/reviews/${reviewId}`);
      return fulfillWithValue(reviewId);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(handleRequestError(error));
      }
    }
  },
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (
    reviewData: { reviewId: string; updatedData: any },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const res: AxiosResponse<IReviews> = await axios.put(
        `${API_URL}/api/reviews/${reviewData.reviewId}`,
        reviewData.updatedData,
      );
      return fulfillWithValue(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(handleRequestError(error));
      }
    }
  },
);

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    deleteReview: (state, action) => {
      const reviewIdToDelete = action.payload;
      state.reviews = state.reviews.filter(
        (review) => review._id !== reviewIdToDelete,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // getReviews
      .addCase(getReviews.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload || [];
        state.loading = false;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      })
      // deleteReview
      .addCase(deleteReview.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        const reviewIdToDelete = action.payload;
        state.reviews = state.reviews.filter(
          (review) => review._id !== reviewIdToDelete,
        );
        state.loading = false;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      })
      //updateReview
      .addCase(updateReview.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const updatedReview = action.payload;
        const index = state.reviews.findIndex(
          (review) => review._id === updatedReview?._id,
        );
        if (index !== -1) {
          if (updatedReview) {
            state.reviews[index] = updatedReview;
          }
        }
        state.loading = false;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      });
  },
});

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
