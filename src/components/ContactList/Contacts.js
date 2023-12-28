import { NameContact, DeleteBtn, WrapperContact } from './Contacts.styled';
import { useDispatch } from 'react-redux';

import { deletedContacts } from 'components/Redux/operations';

export const Contacts = ({ el: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deletedContacts(id));

  return (
    <WrapperContact>
      <NameContact>
        {name}: <span>{number}</span>
      </NameContact>
      <DeleteBtn onClick={handleDelete} type="button">
        Delete
      </DeleteBtn>
    </WrapperContact>
  );
};
