import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
} from 'components/Services/axios.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const add = await addContact(newContact);
      return add;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletedContacts = createAsyncThunk(
  'contacts/deletedContacts',
  async (itemId, thunkAPI) => {
    try {
      const deleted = await deleteContact(itemId);
      return deleted;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
