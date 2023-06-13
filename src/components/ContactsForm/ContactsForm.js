import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Form, FormLabel, FormBtn, Field } from './ContactsForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSabmit = newContact => {
    if (
      contacts.filter(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      ).length > 0
    ) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactShema}
      onSubmit={(values, actions) => {
        handleSabmit({ ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel>
          Name
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
