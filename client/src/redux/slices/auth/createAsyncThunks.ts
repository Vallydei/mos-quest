import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/authService';
import type { AuthState, LoginFormData, SignupFormData, UserType } from '../../../types/auth';
import UserService from '../../../services/userService';

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

export const thunkUpdateUser = createAsyncThunk(
  'authSlice/thunkUpdateUaser',
  async (data) => UserService.updateUser(data),
  // async ({id, data}:{id: UserType['id'], data: SignupFormData}) => UserService.updateUser(id, data),
);

export const thunkConfirm = createAsyncThunk('authSlice/thunkConfirm', async (formData, thunkAPI) =>
  {
    try {
      const response = await AuthService.confirm(formData);
      return response.data; // Предположим, что данные успешно получены
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
      // Передаем сообщение об ошибке в случае ошибочного ответа от сервера
    }
  }
);
