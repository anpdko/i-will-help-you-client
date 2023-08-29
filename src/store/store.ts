import { configureStore } from '@reduxjs/toolkit';
import reviewsSlice from './reviews/reviewsSlice.ts';
import projectsSlice from './projects/projectsSlice.ts';

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
    projects: projectsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
