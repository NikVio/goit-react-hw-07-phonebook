import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContactsValue } from 'components/Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContactsValue);

  return (
    <ContactBox>
      {contacts.map(item => (
        <li key={item.id}>
          <Contacts el={item} />
        </li>
      ))}
    </ContactBox>
  );
};
