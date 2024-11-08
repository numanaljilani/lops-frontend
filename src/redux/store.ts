import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import {combineReducers} from '@reduxjs/toolkit';
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

import userReducer from './slice/profileSlice';

import {authApi} from './query/authApi';
import {employeeApi} from './query/employee';
import {companiesApi} from './query/componiesApi';
import {timeSheetApi} from './query/timesheet';
import {clientsApi} from './query/clientsApi';
import {RFQSApi} from './query/rfqsApi';

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
const reducer = combineReducers({
  user: userReducer,
});
// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    reducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [timeSheetApi.reducerPath]: timeSheetApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [RFQSApi.reducerPath]: RFQSApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      authApi.middleware,
      employeeApi.middleware,
      companiesApi.middleware,
      timeSheetApi.middleware,
      clientsApi.middleware,
      RFQSApi.middleware,
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
