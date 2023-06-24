import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import Filter  from './Filter/Filter';
import { MainTitle, SecondTitle, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

