// src/components/App.jsx
import React from 'react';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Search />
      <ContactList />
    </div>
  );
};

export default App;
