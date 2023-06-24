import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Button, Item, List, Text } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}

      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}

      {error && <Text>{error}</Text>}
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Text>{contact.name}:</Text>
            <Text>{contact.phone}</Text>
            <Button
              type="submit"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;
