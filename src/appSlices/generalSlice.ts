import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


type GeneralState = {
  darkMode: string | null;
  inSideNav:Boolean;
  showMenu:Boolean;
  isMenuBar:Boolean;
};
const initialState: GeneralState = {
  darkMode: localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode")
    : "false",
    inSideNav:false,
    showMenu:false,
    isMenuBar:false,
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
    setInsideNav:(state, action)=>{
      state.inSideNav=action.payload
    },

    setShowMenu:(state)=>{
   
      state.showMenu=!state.showMenu
    },

    offMenu:(state)=>{
     if(state.isMenuBar===false){
      state.showMenu=false
     }
    },

    setIsMenuBar:(state, action)=>{
      state.isMenuBar=action.payload
     }
    
  },
});
export const { setMode, setInsideNav, setShowMenu, offMenu, setIsMenuBar } = generalSlice.actions;
export const mode = (state: RootState) => state.generalReducer.darkMode;
export const inside = (state: RootState) => state.generalReducer.inSideNav;
export const menu = (state: RootState) => state.generalReducer.showMenu;
export const menuBar = (state: RootState) => state.generalReducer.isMenuBar;
export default generalSlice.reducer;
