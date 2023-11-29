import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getetDefaultMiddleware) =>
    getetDefaultMiddleware().concat(cryptoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
