import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactRoster } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactRoster>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactRoster>
  );
};
