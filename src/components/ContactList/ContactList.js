import { useSelector } from 'react-redux';
import { selectContactsFilter, selectContactsList } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactRoster } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactRoster>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ContactRoster>
  );
};
