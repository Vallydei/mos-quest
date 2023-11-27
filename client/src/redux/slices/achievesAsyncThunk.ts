import { createAsyncThunk } from '@reduxjs/toolkit';
import AchieveService from '../../services/achieveService';

const thunkGetAchieves = createAsyncThunk('achieveSlice/thunkGetAchieves', async () =>
  AchieveService.getAll(),
);

export default thunkGetAchieves;
