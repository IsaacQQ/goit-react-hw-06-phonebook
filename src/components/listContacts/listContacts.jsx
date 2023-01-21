import { createSlice } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React from 'react';
import contactSlice from 'redux/contacts/contact-slice';
import filterSlice from 'redux/filter/filter-slice';
import { ListElement, DeleteBtn } from './listContacts.styled';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/contact-selectors';


export default function ListContact({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    
    return (
      items.map(contact =>
      <ListElement key={id}>
        {contact.name}: {contact.number}
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          Delete
        </DeleteBtn>
      </ListElement>
    ));
  });
  return <ul>{elements}</ul>;
}

ListContact.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};