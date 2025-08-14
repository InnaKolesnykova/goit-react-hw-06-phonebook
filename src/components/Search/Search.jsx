// src/components/Search/Search.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/store';

export const Search = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      style={{ marginBottom: '20px', display: 'block' }}
    />
  );
};
