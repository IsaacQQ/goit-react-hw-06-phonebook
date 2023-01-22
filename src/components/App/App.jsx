import React from 'react';
import Form from '../form/form';
import ListContact from '../listContacts/listContacts';
import { Filter } from '../filter/filter';
import { Wrapper } from './App.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-selectors';
import { addContact } from 'redux/contacts/contact-slice';
import { setFilter } from 'redux/filter/filter-slice';


export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);

  const onAddContact = contact => {
    console.log(contact)
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    const action = addContact(contact);
    dispatch(action);
  };


  const isDuplicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };


  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h1>Contacts</h1>
      <Filter />
      <ListContact />
    </Wrapper>
  );
}