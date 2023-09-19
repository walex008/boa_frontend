import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type DashboardState = {
  messageId: (string | number)[];
};
const initialState: DashboardState = {
  messageId: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setMessageId: (
      state: DashboardState,
      action: PayloadAction<string | number>
    ) => {
      const msgId = action.payload;
      if (!state.messageId.includes(msgId)) {
        state.messageId.push(msgId);
      } else {
        const filteredIds = state.messageId.filter((id) => id !== msgId);
        state.messageId = filteredIds;
      }
    },
  },
});
export const { setMessageId } = dashboardSlice.actions;
export const msgId = (state: RootState) => state.dashboardReducer.messageId;
export default dashboardSlice.reducer;
