import { Container, Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
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
    </Container>
  );
};

export default Filter;
