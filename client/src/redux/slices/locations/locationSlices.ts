import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommentType, LocationType } from '../../../types/locationType/locationType';
import {
  thunkDeleteCommentOfLocation,
  thunkEditCommentOfLocation,
  thunkGetCommentsOfLocation,
  thunkGetLocations,
  thunkPostCommentOfLocation,
} from './locationAsyncThunks';

const initialState: {
  selectedLocations: LocationType[];
  locations: LocationType[];
  location: LocationType | null;
  comments: CommentType[];
} = {
  locations: [],
  location: null,
  comments: [],
  selectedLocations: [],
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
    setSelectedLocations: (state, action: PayloadAction<number>) => {
      const targetLocations = state.locations.filter((el) => el!.type === action.payload);

      if (action.payload === 4) {
        state.selectedLocations = state.locations;
      } else {
        state.selectedLocations = targetLocations;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
    });
    builder.addCase(thunkGetCommentsOfLocation.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(thunkPostCommentOfLocation.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
    builder.addCase(thunkEditCommentOfLocation.fulfilled, (state, action) => {
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment,
      );
    });
    builder.addCase(thunkDeleteCommentOfLocation.fulfilled, (state, action) => {
      if (state.comments)
        state.comments = state.comments.filter((comment) => comment.id !== action.payload);
      else return state;
    });
  },
});

export default locationsSlice.reducer;
export const { getSelectedLocation, setSelectedLocations } = locationsSlice.actions;

// builder.addCase(deletePostThunk.fulfilled, (state, action) =>
//   state.filter((el) => el.id !== action.payload),
// );
