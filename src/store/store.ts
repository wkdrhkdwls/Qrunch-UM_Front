import { combineReducers, configureStore, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { authSlice } from '@/reducer/authSlice';
import uiSlice from '@/reducer/uiSlice';
import logger from 'redux-logger';
import buttonToggle from '@/reducer/buttonToggle';
import urlInput from '@/reducer/urlInput';
import textInput from '@/reducer/textInput';

const reducer = (state: any, action: PayloadAction<any>) => {
  return combineReducers({
    [authSlice.name]: authSlice.reducer,
    ui: uiSlice,
    buttonToggle: buttonToggle,
    url: urlInput,
    text: textInput,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
