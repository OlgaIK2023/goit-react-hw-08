import { createSlice } from "@reduxjs/toolkit";
import { apiRequestContacts } from "./contactsOps";
import { addContact, deleteContact } from "./contactsOps";

 export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}


const handleRejected = (state, action) => {
  state.loading = false;
  state.items = action.payload;
}

const handlePending = (state) => {
  state.loading = true;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  extraReducers: builder => {
    builder
      .addCase(apiRequestContacts.pending, handlePending)
      .addCase(apiRequestContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiRequestContacts.rejected, handleRejected)
      .addCase(addContact.pending,handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
       state.loading = false;
       state.items = state.items.filter((item) => item.id !== action.payload.id)
    })
    .addCase(deleteContact.rejected, handleRejected)
  },
});


// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;