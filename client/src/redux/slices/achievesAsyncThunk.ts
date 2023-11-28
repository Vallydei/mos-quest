import { createAsyncThunk } from '@reduxjs/toolkit';
import AchieveService from '../../services/achieveService';
import type { AchieveType } from '../../types/locationType/achievesType';
import type { UserType } from '../../types/auth';

export const thunkGetAchieves = createAsyncThunk('achieveSlice/thunkGetAchieves', async () =>
  AchieveService.getAll(),
);

export const thunkNewUserAchiv = createAsyncThunk<AchieveType, AchieveType['id']>(
  'achieveSlice/thunkNewUserAchiv',
  async (id: AchieveType['id']) => AchieveService.addNewUserAchiv(id),
);

export const thunkGetUserAchiv = createAsyncThunk<AchieveType[], UserType['id']>(
  'achieveSlice/thunkGetUserAchiv',
  async (id) => AchieveService.getAllUserAchiv(id),
);
