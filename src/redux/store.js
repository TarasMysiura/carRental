import { configureStore } from "@reduxjs/toolkit";

import { advertsReducer } from "./advertsSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { filterSliceReducer } from "./filterSlice";
import { favoriteSliceReducer } from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filterAdverts: filterSliceReducer,
    favoriteAdverts: favoriteSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
