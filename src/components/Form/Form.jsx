import React, { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      return;
    }

    if (contacts.find(contact => contact.number === trimmedNumber)) {
      alert(`Number ${trimmedNumber} is already in contacts!`);
      return;
    }

    if (contacts.find(contact => contact.name.toLowerCase() === trimmedName.toLowerCase())) {
      alert(`Name ${trimmedName} is already in contacts!`);
      return;
    }

    // Виклик згідно prepare(name, number)
    dispatch(addContact(trimmedName, trimmedNumber));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export { Form };
