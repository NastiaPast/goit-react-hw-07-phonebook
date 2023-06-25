import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from './ContactForm.styled';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const isNameUnique = contacts.every(
      contact => contact.name.toLowerCase() !== name.toLowerCase()
    );

    if (!isNameUnique) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    dispatch(addContact(contact))
      .then(() => {
        e.target.reset();
        Notify.success(`${name} is added to contacts`);
      })
      .catch(() => {
        Notify.failure('Failed to add contact');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <div>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <Label htmlFor="number">Number</Label>
      <div>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
