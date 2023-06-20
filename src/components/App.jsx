import React from "react";
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'

export class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }


  addContact = obj => {
    const chackContact = this.state.contacts.find(e => {
      return e.name.toLowerCase() === obj.name.toLowerCase();
    });
    if (chackContact)
      return alert(`${chackContact.name} is already in contacts`);
    this.setState(prev => {
      return { contacts: [...prev.contacts, obj] };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  deleteContact = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(e => e.id !== id) };
    });
  };

  visibleNumbers = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };





  render() {
    const getVisibleContacts = this.visibleNumbers();
    return (
      <div style={appSlyle}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.changeFilter} />
        <ContactList visibleContacts={getVisibleContacts}
          deleteContact={this.deleteContact} />

      </div>
    )
  }

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