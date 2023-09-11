import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IProjectsState, IProjectsError, IProject } from './projectsType';
import authHeader from '../../services/admin/header.service';
import { adminLogout } from '../admin/adminSlice';

const API_URL = import.meta.env.VITE_API_URL;

const initialState: IProjectsState = {
  projects: [],
  loading: null,
  message: null,
};

const handleRequestError = (
  error: AxiosError<IProjectsError>,
  thunkAPI: any,
) => {
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

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, thunkAPI) => {
    try {
      const res: AxiosResponse<IProject[]> = await axios.get(
        `${API_URL}/api/projects`,
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(handleRequestError(error, thunkAPI));
      }
    }
  },
);

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/projects/${projectId}`,
        {
          headers: authHeader(),
        },
      );

      if (response.status === 200) {
        thunkAPI.dispatch(removeProject(projectId));
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

// export const updateProject = createAsyncThunk(
//   'projects/updateProject',
//   async (projectData, thunkAPI) => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/api/projects/${projectData.projectId}`,
//         projectData.updatedData,
//         {
//           headers: authHeader(),
//         },
//       );
//
//       if (response.status === 200) {
//         thunkAPI.dispatch(changeProject(response.data));
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

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    removeProject: (state, action) => {
      const projectIdToRemove = action.payload;
      state.projects = state.projects.filter(
        (project) => project._id !== projectIdToRemove,
      );
    },
    changeProject: (state, action) => {
      const updatedProject = action.payload;
      const index = state.projects.findIndex(
        (project) => project._id === updatedProject?._id,
      );
      if (index !== -1) {
        if (updatedProject) {
          state.projects[index] = updatedProject;
        }
      }
    },
  },
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
      })
      // deleteProject
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.message = String(action.payload);
      });
  },
});

export const { removeProject, changeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
