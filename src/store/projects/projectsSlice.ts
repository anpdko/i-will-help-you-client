import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IProject, IProjectsState, IProjectsError } from './projectsType';
// import authHeader from '../../services/admin/header.service'

const API_URL = import.meta.env.VITE_API_URL;

const initialState: IProjectsState = {
  projects: [],
  loading: null,
  message: null,
};

const handleRequestError = (error: AxiosError<IProjectsError>) => {
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

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IProject[]> = await axios.get(
        `${API_URL}/api/projects`,
      );
      return fulfillWithValue(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(handleRequestError(error));
      }
    }
  },
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getProjects
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload || [];
        state.loading = false;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      });
  },
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
