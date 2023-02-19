import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactDelete } from './ContactDelete/ContactDelete';
import Notiflix from 'notiflix';


export const App = () => {
const [contacts, setContacts] = useState(()=>
JSON.parse(localStorage.getItem('contactList') || "[]") );

const [filter, setFilter] = useState('');
useEffect(() => {
  localStorage.setItem('contactList', JSON.stringify(contacts));
}, [contacts]);


 const handleOnChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleOnSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    


    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
    } else {
      const contactsLists = [...contacts, { id, name, number }];
      setContacts(contactsLists);
    }
    
  };

 const handleOnDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e),
    );
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };


    return (
      <div
      style={{
        margin: '100px',
        height: '100vh',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleOnSubmit} />
        <h2> Contacts</h2>
        <FilterForm filter={filter} handleOnChange={handleOnChange} />
        <ContactDelete
          contacts={getFilteredContacts()}
          handleOnDelete={handleOnDelete}
        />
      </div>
    );
  };

