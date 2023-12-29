import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReduser } from './contactsSlice';
import { filtersReduser } from './filtersSlice';

const rootRedusers = combineReducers({
  contacts: contactsReduser,
  filters: filtersReduser,
});

export const store = configureStore({
  reducer: rootRedusers,
});
