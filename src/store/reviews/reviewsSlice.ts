import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {AxiosResponse, AxiosError} from "axios";
import { IReviews, ReviewsState, IReviewsError} from './reviewstType'
// import authHeader from '../../services/admin/header.service'

const API_URL = import.meta.env.VITE_API_URL 

const initialState: ReviewsState = {
   reviews: [],
   loading: null,
   message: null,
};

const handleRequestError = (error: AxiosError<IReviewsError>) => {
   if(window.location.hostname === 'localhost'){
      console.log(error)
   }
   if (axios.isAxiosError(error) && error.response) {
      if (error.response?.status === 401) {
         alert(error.response.data.message);
         // logout with admin
      }
      if (error.response.data.message){
         return error.response.data.message;
      }
      if (error.message){
         return error.message;
      }
   }
   return 'Server error';
};

export const getReviews = createAsyncThunk(
   'reviews/getReviews',
   async (_, { fulfillWithValue, rejectWithValue }) => {
      try {
         const res: AxiosResponse<IReviews[]> = await axios.get(`${API_URL}/api/reviews`);
         return fulfillWithValue(res.data);
      } catch (error) {
         if (axios.isAxiosError(error)){
            return rejectWithValue(handleRequestError(error))
         }
      }
   }
);

export const reviewsSlice = createSlice({
   name: 'reviews',
   initialState,
   reducers: {},
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
   }
})


export const {} = reviewsSlice.actions
export default reviewsSlice.reducer