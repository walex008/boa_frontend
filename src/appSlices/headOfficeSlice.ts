import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type DashboardState = {
  view: "overview" | "staffs" | "payroll";
};
const initialState: DashboardState = {
  view: "overview",
};

export const headOfficeSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setView: (
      state: DashboardState,
      action: PayloadAction<"overview" | "staffs" | "payroll">
    ) => {
      state.view = action.payload;
    },
  },
});
export const { setView } = headOfficeSlice.actions;
export const view = (state: RootState) => state.headOfficeReducer.view;
export default headOfficeSlice.reducer;
