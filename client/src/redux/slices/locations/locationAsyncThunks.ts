import { createAsyncThunk } from '@reduxjs/toolkit';
import LocationService from '../../../services/locationService';
import type { CommentFormType, CommentType } from '../../../types/locationType/locationType';

export const thunkGetLocations = createAsyncThunk('locationSlice/thunkGetLocations', async () =>
  LocationService.getAll(),
);

export const thunkGetCommentsOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkGetCommentsOfLocation',
  async () => LocationService.getAllComments(),
);

export const thunkPostCommentOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkPostCommentOfLocation',
  async (comment: CommentFormType) => 
    LocationService.postComment(comment)
  ,
);
