import { createSlice } from '@reduxjs/toolkit';


export const composeMailSlice = createSlice({
  name: 'composeMail',
  initialState:{
    isComposeMailOpen: false,
    selectedMessage: null
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
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload
    }
  },
  
});

export const { openComposeMail, closeComposeMail, sendComposeMail, openMessage } = composeMailSlice.actions;

// selector for compose mail
export const selectIsComposeMailOpen = (state) => state.composeMail.isComposeMailOpen;

// selector for particular singal mail
export const selectedMail = (state) => state.composeMail.selectedMessage;

export default composeMailSlice.reducer;
