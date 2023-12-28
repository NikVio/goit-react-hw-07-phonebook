import { configureStore } from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
//import { filtersReduser } from './filtersSlice';

import { contactsReduser } from './contactsSlice';

// const rootReduser = combineReducers({
//   contacts: contactsReduser,
//   filters: filtersReduser,
// });

//const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});

//export const persistor = persistStore(store);
