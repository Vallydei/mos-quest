import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommentType, LocationType } from '../../../types/locationType/locationType';
import { thunkGetCommentsOfLocation, thunkGetLocations } from './locationAsyncThunks';

const initialState: {
  locations: LocationType[];
  location: LocationType | null;
  comments: CommentType[] | [];
} = {
  locations: [],
  location: null,
  comments: [],
};

export const locationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    getSelectedLocation: (state, action: PayloadAction<number>) => {
      const location = state.locations.find((el) => el!.id === action.payload);
      if (location) {
        state.location = location;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetLocations.fulfilled, (state, action) => ({
      ...state,
      locations: action.payload, /// почему не работает extraReducers: (builder) => {builder.addCase(thunkGetLocations.fulfilled,(state, action) => (state.locations = action.payload));
    }));
    builder.addCase(thunkGetCommentsOfLocation.fulfilled, (state, action) => ({
      ...state,
      comments: action.payload,
    }));
  },
});

export default locationsSlice.reducer;
export const { getSelectedLocation } = locationsSlice.actions;

// builder.addCase(addPostThunk.fulfilled, (state, action) => {
//   state.unshift(action.payload);
// });
// builder.addCase(deletePostThunk.fulfilled, (state, action) =>
//   state.filter((el) => el.id !== action.payload),
// );
// builder.addCase(updatePostThunk.fulfilled, (state, action) => {
//   state = state.map((post) => (post.id === action.payload.id ? action.payload : post));
// });
