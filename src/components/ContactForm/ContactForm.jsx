import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contacts/sliceContacts';
import css from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactName) {
      resetInputForm();
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));
    resetInputForm();
  };

  const resetInputForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.label__name}>Name</span>
        <input
          onChange={handleChangeInput}
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.label__name}>Number</span>
        <input
          onChange={handleChangeInput}
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
