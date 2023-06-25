import { Container, Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const noContactsFound = filter !== '' && filteredContacts.length === 0;

  return (
    <Container>
      <Label>
        Find contacts by name
        <Container>
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
        </Container>
      </Label>
      {noContactsFound && <p>No contacts found.</p>}
    </Container>
  );
};

export default Filter;
