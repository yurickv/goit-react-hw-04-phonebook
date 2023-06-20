import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'

const LS_KEY = 'contacts'

export function App() {

  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [phonebook, setPhonebook] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? defaultContacts;
  })
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(phonebook))
  }, [phonebook])

  // функція додавання контактів
  const addContact = obj => {
    const chackContact = phonebook.find(e => { return e.name.toLowerCase() === obj.name.toLowerCase(); });

    if (chackContact) return alert(`${chackContact.name} is already in contacts`);

    setPhonebook(prev => {
      return [...prev.contacts, ...obj];
    });
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const deleteContact = id => {
    setPhonebook(prev => prev.contacts.filter(e => e.id !== id));
  };

  const visibleNumbers = phonebook.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });


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