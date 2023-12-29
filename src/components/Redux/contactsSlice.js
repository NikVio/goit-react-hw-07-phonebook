import { createSlice } from '@reduxjs/toolkit';

import { addContacts, deletedContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deletedContacts.pending, handlePending)
      .addCase(deletedContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletedContacts.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
