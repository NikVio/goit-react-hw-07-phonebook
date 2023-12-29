import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = state => state.filters;

export const selectContactsValue = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContactsValue, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);
