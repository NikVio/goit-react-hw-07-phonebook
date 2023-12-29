import { useEffect } from 'react';
import { Comment } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from './Redux/operations';

import {
  selectContactsValue,
  selectError,
  selectIsLoading,
} from './Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && (
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      )}

      {contacts.length > 0 && <ContactList />}

      {error && <p>{error}</p>}

      <GlobalStyle />
    </div>
  );
};
