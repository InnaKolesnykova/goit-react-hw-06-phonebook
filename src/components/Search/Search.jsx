import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

export const Search = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};
