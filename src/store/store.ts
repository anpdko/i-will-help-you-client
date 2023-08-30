import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reviewsSlice from './reviews/reviewsSlice.ts';
import projectsSlice from './projects/projectsSlice.ts';
import adminService from './admin/adminSlice.ts';

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
    projects: projectsSlice,
    admin: adminService,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
