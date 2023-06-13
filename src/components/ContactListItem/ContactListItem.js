import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { ContactBtn, ContactInfo, ContactItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactItem key={id}>
      <ContactInfo>{name}</ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <ContactBtn type="button" onClick={() => handleDelete(id)}>
        Delete
      </ContactBtn>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
