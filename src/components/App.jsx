import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'

const LS_KEY = 'contacts'
const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '8097-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '8097-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '8097-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '8097-227-91-26' },
];

export function App() {

  const [phonebook, setPhonebook] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? defaultContacts;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(phonebook))
  }, [phonebook])


  // функція додавання контактів
  const addContact = obj => {
    const chackContact = phonebook.find(e => { return e.name.toLowerCase() === obj.name.toLowerCase(); });

    if (chackContact) return alert(`${obj.name} is already in contacts`);

    setPhonebook([...phonebook, { ...obj }]);
  };

  // Пошук (фільтр) контактів
  const changeFilter = ({ target }) => {
    setSearch(target.value);
  };
  const visibleNumbers = phonebook.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });

  // Видалення контактів
  const deleteContact = id => {
    setPhonebook(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div style={appSlyle}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={changeFilter} />
      <ContactList visibleContacts={visibleNumbers}
        deleteContact={deleteContact} />

    </div>
  )
};














const appSlyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}