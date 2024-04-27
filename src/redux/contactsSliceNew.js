import { createSlice } from "@reduxjs/toolkit";
import { apiRequestContacts } from "./contactsOps";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    isError: false,
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSliceNew = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
//   reducers: {changeFilter: (state, action) => {
      
//   }}
  extraReducers: (builder) => builder

  //Get all contacts
  .addCase(apiRequestContacts.pending, (state) => {
    state.isLoading = true;
    state.isError = false;
  })
  .addCase(apiRequestContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isError = false;
    state.contacts.items = action.payload;
  })
  .addCase(apiRequestContacts.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.error = action.payload;
  }),
});

export const contactsReducerNew = contactsSliceNew.reducer;

export const selectContacts = (state) => state.contacts.items;
