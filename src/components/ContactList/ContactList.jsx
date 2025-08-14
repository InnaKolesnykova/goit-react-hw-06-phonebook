import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/select';
import { ContactElem } from '../ContactElem/ContactElem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contBox}>
      <ul>
        {filteredContacts.map(contact => (
          <ContactElem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
