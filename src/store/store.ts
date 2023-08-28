import { configureStore } from '@reduxjs/toolkit';
import reviewsSlice from './reviews/reviewsSlice.ts';

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
