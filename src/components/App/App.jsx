import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchForm />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};
