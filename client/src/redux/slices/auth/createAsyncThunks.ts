import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/authService';
import type { AuthState, LoginFormData, SignupFormData } from '../../../types/auth';

export const thunkCheckAuth = createAsyncThunk<AuthState>('authSlice/thunkCheckAuth', async () => {
  const backendAuth = await AuthService.check();
  return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
});

export const thunkLogin = createAsyncThunk(
  'authSlice/thunkLogin',
  async (formData: LoginFormData) => AuthService.login(formData),
);

export const thunkSignup = createAsyncThunk(
  'authSlice/thunkSignup',
  async (formData: SignupFormData) => AuthService.signup(formData),
);

export const thunkLogout = createAsyncThunk('authSlice/thunkLogout', () => AuthService.logout());

export const thunkRefreshToken = createAsyncThunk<AuthState['accessToken']>(
  'authSlice/thunkRefreshToken',
  async () => {
    const backendAuth = await AuthService.refresh();
    return backendAuth.accessToken;
  },
);
