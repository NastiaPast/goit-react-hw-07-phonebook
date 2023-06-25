import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Button, Item, List, Text } from './ContactList.styled';
import { Notify } from 'notiflix';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDeleteContact = (id, name) => {
    dispatch(deleteContact(id));
    Notify.success(`Contact ${name} deleted`);
  };

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Text>{contact.name}:</Text>
            <Text>{contact.phone}</Text>
            <Button
              type="submit"
              onClick={() => handleDeleteContact(contact.id, contact.name)}
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
