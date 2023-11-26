import { createAsyncThunk } from '@reduxjs/toolkit';
import LocationService from '../../../services/locationService';
import type { LocationType, CommentType } from '../../../types/locationType/locationType';

export const thunkGetLocations = createAsyncThunk<LocationType[]>(
  'locationSlice/thunkGetLocations',
  async () => {
    const locations = await LocationService.getAll();
    return locations;
  },
);

export const thunkGetCommentsOfLocation = createAsyncThunk<CommentType[]>(
  'locationCommentSlice/thunkGetCommentsOfLocation',
  async () => {
    const comments = await LocationService.getAllComments();
    return comments;
  },
);
// export const thunkLogin = createAsyncThunk(
//   'authSlice/thunkLogin',
//   async (formData: LoginFormData) => {
//     const backendAuth = await AuthService.login(formData);
//     return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
//   },
// );

// export const thunkSignup = createAsyncThunk(
//   'authSlice/thunkSignup',
//   async (formData: SignupFormData) => {
//     console.log(formData);
//     const backendAuth = await AuthService.signup(formData);

//     return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
//   },
// );

// export const thunkLogout = createAsyncThunk('authSlice/thunkLogout', () => AuthService.logout());

// export const thunkRefreshToken = createAsyncThunk<AuthState['accessToken']>(
//   'authSlice/thunkRefreshToken',
//   async () => {
//     const backendAuth = await AuthService.refresh();
//     return backendAuth.accessToken;
//   },
// );
