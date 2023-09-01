import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IReviews, IReviewsState, IReviewsError } from './reviewsType';
import authHeader from '../../services/admin/header.service';
import { adminLogout } from '../admin/adminSlice';
// import authHeader from '../../services/admin/header.service'

const API_URL = import.meta.env.VITE_API_URL;

const initialState: IReviewsState = {
  reviews: [],
  loading: null,
  message: null,
};

const handleRequestError = (error: AxiosError<IReviewsError>, thunkAPI: any) => {
  if (window.location.hostname === 'localhost') {
    console.log(error);
  }
  if (axios.isAxiosError(error) && error.response) {
    if (error.response?.status === 401) {
      alert(error.response.data.message);
      thunkAPI.dispatch(adminLogout());
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
  async (_, thunkAPI) => {
    try {
      const res: AxiosResponse<IReviews[]> = await axios.get(
        `${API_URL}/api/reviews`,
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(handleRequestError(error, thunkAPI));
      }
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (reviewId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/api/reviews/${reviewId}`, {
        headers: authHeader(),
      });

      if (response.status === 200) {
        thunkAPI.dispatch(removeReview(reviewId));
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(handleRequestError(error, thunkAPI));
      }
    }
  },
);

// export const updateReview = createAsyncThunk(
//   'reviews/updateReview',
//   async (reviewData, thunkAPI) => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/api/reviews/${reviewData.reviewId}`,
//         reviewData.updatedData,
//         {
//           headers: authHeader(),
//         },
//       );
//
//       if (response.status === 200) {
//         thunkAPI.dispatch(updateReview(response.data));
//       } else {
//         console.log('Server error');
//         throw new Error('Server error');
//       }
//     } catch (error) {
//       if (
//         axios.isAxiosError(error) &&
//         error.response &&
//         error.response.status === 401
//       ) {
//         alert(error.response.data.message);
//         thunkAPI.dispatch(adminLogout());
//       }
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    removeReview: (state, action) => {
      const reviewIdToRemove = action.payload;
      state.reviews = state.reviews.filter(
        (review) => review._id !== reviewIdToRemove,
      );
    },
    updateReview: (state, action) => {
      const updatedReview = action.payload;
      const index = state.reviews.findIndex(
        (review) => review._id === updatedReview?._id,
      );
      if (index !== -1) {
        if (updatedReview) {
          state.reviews[index] = updatedReview;
        }
      }
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
      .addCase(deleteReview.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      });
  },
});

export const { removeReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
