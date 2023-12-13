import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue.toLowerCase() });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          initialName={name}
          initialNumber={number}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
