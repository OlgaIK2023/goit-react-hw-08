import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// const instance = axios.create({
//   baseURL: "https://66297acf67df268010a0db3a.mockapi.io/",
// });

// export const requestContacts = async () => {
//   const { data } = await instance.get("/contacts");

//   return data;
// };


axios.defaults.baseURL = "https://66297acf67df268010a0db3a.mockapi.io";

export const apiRequestContacts = createAsyncThunk (
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
          const response = await axios.get('/contacts');
          return response.data;  // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (finalContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts',  finalContact );
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);