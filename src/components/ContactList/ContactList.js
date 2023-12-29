import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/selectors';

export const ContactList = () => {
  const visible = useSelector(selectVisibleContacts);

  return (
    <ContactBox>
      {visible.map(item => (
        <li key={item.id}>
          <Contacts el={item} />
        </li>
      ))}
    </ContactBox>
  );
};
