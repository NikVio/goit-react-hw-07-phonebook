import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsValue,
  selectFilters,
  selectVisibleContacts,
} from 'components/Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'components/Redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsValue);
  const visible = useSelector(selectVisibleContacts);

  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return visible;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactBox>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contacts el={item} />
        </li>
      ))}
    </ContactBox>
  );
};
