import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

function App() {
  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
