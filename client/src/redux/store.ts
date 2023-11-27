import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import locationsReducer from './slices/locations/locationSlices';
import questSlices from './slices/questThunks/questSlices';
import achievesReducer from './slices/achievesSlices';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    locationsSlice: locationsReducer,
    questsSlice: questSlices,
    achieves: achievesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
