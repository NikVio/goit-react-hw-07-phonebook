import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectContactsValue,
  selectFilters,
  selectVisibleContacts,
} from 'components/Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContactsValue);

  const visible = useSelector(selectVisibleContacts);

  const filter = useSelector(selectFilters);

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
