// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../appSlices/generalSlice";
import dashboardReducer from "../appSlices/dasboardSlice";
import headOfficeReducer from "../appSlices/headOfficeSlice";
import { apiSlice } from "../appSlices/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    generalReducer,
    dashboardReducer,
    headOfficeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
