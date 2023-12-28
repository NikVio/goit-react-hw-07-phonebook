//import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
//import { fetchContacts } from './Redux/operations';

import {
  selectContactsValue,
  selectError,
  selectIsLoading,
} from './Redux/selectors';

export const App = () => {
  //const dispatch = useDispatch();
  const contacts = useSelector(selectContactsValue);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        !error && !isLoading && <p>You don't have any contacts</p>
      )}
      {error && <p>Opssss!</p>}
      {isLoading && <b>Request in progress...</b>}
      <ContactList />

      <GlobalStyle />
    </div>
  );
};
