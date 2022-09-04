import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import galleryReducer from '../features/gallery/gallerySlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    gallery: galleryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
