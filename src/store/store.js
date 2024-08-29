import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slices/themeSlice';
import languageReducer from '../slices/languageSlice';

// Export the store as a named export
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});
