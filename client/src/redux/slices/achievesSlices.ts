import { createSlice } from '@reduxjs/toolkit';
import type { AchieveType } from '../../types/locationType/achievesType';
import thunkGetAchieves from './achievesAsyncThunk';

const initialState: {
  ahieves: AchieveType[];
} = {
  ahieves: [],
};

export const achievesSlice = createSlice({
  name: 'achieve',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGetAchieves.fulfilled, (state, action) => {
      state.ahieves = action.payload;
    });
  },
});

export default achievesSlice.reducer;
