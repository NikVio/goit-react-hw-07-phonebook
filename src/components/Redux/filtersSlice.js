import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact(state, { payload }) {
      return (state = payload);
    },
  },
});

export const filtersReduser = filtersSlice.reducer;

export const { filterContact } = filtersSlice.actions;
