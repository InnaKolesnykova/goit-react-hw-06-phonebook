import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactElem.module.css';

export const ContactElem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactItem}>
      {contact.name}: {contact.number}
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
