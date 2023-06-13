import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchForm />
      <ContactList />
    </Container>
  );
};
