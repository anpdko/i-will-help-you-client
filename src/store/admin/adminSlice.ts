import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authHeader from '../../services/admin/header.service'
import adminService from '../../services/admin/admin.service' 
import axios from 'axios';


const API_URL: string | undefined = import.meta.env.VITE_API_URL;

export interface IAdminRes {
   adminId: string;
   login: string;
   token: string;
}

export interface IMessage {
   login?: string;
   password?: string;
}

export interface IAdminState {
   admin: IAdminRes | null;
   isLoggedIn: boolean;
   loading: boolean;
   message: string | null | IMessage;
}

const adminJson = localStorage.getItem('admin');
const admin: any = adminJson ? JSON.parse(adminJson) : null;

const initialState: IAdminState = admin
   ? {
      admin,
      isLoggedIn: true,
      loading: false,
      message: null,
   }
   : {
      admin: null,
      isLoggedIn: false,
      loading: false,
      message: null,
   };

interface IAdminData {
   login: string;
   password: string;
}

export const adminLogin = createAsyncThunk(
   'admin/adminLogin',
   async ({ login, password }: IAdminData, thunkAPI) => {
      try {
         const res = await axios.post(`${API_URL}/api/admin/login`, {
            login,
            password,
         });

         if (res.data.token) {
            localStorage.setItem('admin', JSON.stringify(res.data));
            return thunkAPI.fulfillWithValue(res.data);
         }
         return thunkAPI.rejectWithValue('An error occurred');
      } catch (error) {
         if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message);
         } else {
            return thunkAPI.rejectWithValue('An error occurred');
         }
      }
   },
);

export const isRegistered = createAsyncThunk(
   'admin/isRegistered',
   async (_, thunkAPI) => {
      try {
         const res = await axios.get(`${API_URL}/api/admin/is/registered`, { headers: authHeader() });
         if(adminService.isAuth(res.status)){
            thunkAPI.dispatch(clearAdmin())
         }
      } catch (error) {
         if (axios.isAxiosError(error) && error.response) {
            if(adminService.isAuth(error.response.status)){
               thunkAPI.dispatch(clearAdmin())
            }
         }
      }
   }
)

export const adminLogout = createAsyncThunk(
   'admin/adminLogout',
   async (_, thunkAPI) => {
      await localStorage.removeItem('admin');
      await thunkAPI.dispatch(clearAdmin());
      return thunkAPI.rejectWithValue({});
   },
);

const adminSlice = createSlice({
   name: 'admin',
   initialState,
   
   reducers: {
      clearMessage: (state) => {
         state.message = '';
      },
      clearAdmin: () => {
         return {
            admin: null,
            isLoggedIn: false,
            loading: false,
            message: null,
         };
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(adminLogin.pending, (state) => {
            state.isLoggedIn = false;
            state.loading = true;
            state.admin = null;
            state.message = null;
         })
         .addCase(adminLogin.fulfilled, (state, action) => {
            // console.log('admin1');
            state.isLoggedIn = true;
            state.loading = false;
            state.admin = action.payload;
         })
         .addCase(adminLogin.rejected, (state, action) => {
            // console.log('admin', action.payload);
            state.isLoggedIn = false;
            state.loading = false;
            state.admin = null;

            if (typeof action.payload === 'string') {
               state.message = action.payload;
            } else if (typeof action.payload === 'object') {
               state.message = action.payload;
            } else {
               state.message = 'An error occurred';
            }
         });
   },
});

export const { clearMessage, clearAdmin } = adminSlice.actions;
export default adminSlice.reducer;
