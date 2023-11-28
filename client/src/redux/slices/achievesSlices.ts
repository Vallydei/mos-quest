import { createSlice } from '@reduxjs/toolkit';
import type { AchieveType } from '../../types/locationType/achievesType';
import { thunkNewUserAchiv, thunkGetAchieves, thunkGetUserAchiv } from './achievesAsyncThunk';

const initialState: {
  ahieves: AchieveType[];
  currentUserAchives: AchieveType[];
} = {
  ahieves: [],
  currentUserAchives: [],
};

export const achievesSlice = createSlice({
  name: 'achieve',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGetAchieves.fulfilled, (state, action) => {
      state.ahieves = action.payload;
    });
    builder.addCase(thunkGetUserAchiv.fulfilled, (state, action) => {
      state.currentUserAchives = action.payload;
    });

    builder.addCase(thunkNewUserAchiv.fulfilled, (state, action) => {
      state.currentUserAchives.push(action.payload);
    });
  },
});

export default achievesSlice.reducer;
