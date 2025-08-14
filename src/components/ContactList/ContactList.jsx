
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/store';

export const ContactList = () => {
  const { items, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}{' '}
          <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
