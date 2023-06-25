import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { MainTitle, SecondTitle, Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Notify } from 'notiflix';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error && Notify.failure('Something went wrong.')}
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};
