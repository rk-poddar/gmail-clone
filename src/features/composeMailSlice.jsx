import { createSlice } from '@reduxjs/toolkit';


export const composeMailSlice = createSlice({
  name: 'composeMail',
  initialState:{
    isComposeMailOpen: false
  },
  reducers: {
    openComposeMail: (state) => {
      state.isComposeMailOpen = true
    },
    closeComposeMail: (state) => {
      state.isComposeMailOpen = false
    },
    sendComposeMail: (state) => {
      state.isComposeMailOpen = false
    }
  },
  
});

export const { openComposeMail, closeComposeMail, sendComposeMail } = composeMailSlice.actions;

export const selectIsComposeMailOpen = (state) => state.composeMail.isComposeMailOpen;

export default composeMailSlice.reducer;
