// src/components/Form/Form.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/store';
import { nanoid } from 'nanoid';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) return alert('Enter name and phone');
    if (contacts.some(c => c.name === name)) return alert('Contact already exists');

    dispatch(addContact({ id: nanoid(), name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
