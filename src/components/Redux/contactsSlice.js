import { createSlice } from '@reduxjs/toolkit';

import { addContacts, deletedContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deletedContacts.pending, handlePending)
      .addCase(deletedContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload
        );
      })
      .addCase(deletedContacts.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

//  addContact: {
//       reducer(state, action) {
//         return [...state, action.payload];
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             id: nanoid(),
//             ...contact,
//           },
//         };
//       },
//     },
//     deletedContact(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
