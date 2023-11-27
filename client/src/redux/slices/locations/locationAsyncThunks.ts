import { createAsyncThunk } from '@reduxjs/toolkit';
import LocationService from '../../../services/locationService';
import type { CommentEditType, CommentFormType } from '../../../types/locationType/locationType';

export const thunkGetLocations = createAsyncThunk('locationSlice/thunkGetLocations', async () =>
  LocationService.getAll(),
);

export const thunkGetCommentsOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkGetCommentsOfLocation',
  async () => LocationService.getAllComments(),
);

export const thunkPostCommentOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkPostCommentOfLocation',
  async (comment: CommentFormType) => LocationService.postComment(comment),
);

export const thunkEditCommentOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkEditCommentOfLocation',
  async (comment: CommentEditType) => LocationService.editComment(comment),
  
);

export const thunkDeleteCommentOfLocation = createAsyncThunk(
  'locationCommentSlice/thunkDeleteCommentOfLocation',
  async (id: number) => LocationService.deleteComment(id),
  
);
