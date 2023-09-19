import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type GeneralState = {
  darkMode: string | null;
};
const initialState: GeneralState = {
  darkMode: localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode")
    : "false",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setMode: (state) => {
      if (state.darkMode === "true") {
        state.darkMode = "false";
        localStorage.setItem("darkMode", "false");
      } else {
        state.darkMode = "true";
        localStorage.setItem("darkMode", "true");
      }
    },
  },
});
export const { setMode } = generalSlice.actions;
export const mode = (state: RootState) => state.generalReducer.darkMode;
export default generalSlice.reducer;
