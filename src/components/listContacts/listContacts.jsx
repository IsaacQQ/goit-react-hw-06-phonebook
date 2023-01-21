import { createSlice, nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React from 'react';
import contactSlice from 'redux/contacts/contact-slice';
import filterSlice from 'redux/filter/filter-slice';
import { ListElement, DeleteBtn } from './listContacts.styled';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/contact-selectors';
import { useSelector, useDispatch } from 'react-redux';


export default function ListContact({ removeContact }) {
  const items = useSelector(getContacts)
  const elements = items.map(({ id }) => {
    
    return (
      <ListElement key={id}>
        {items.name}: {items.number}
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          Delete
        </DeleteBtn>
      </ListElement>
    );
  });
  return <ul>{elements}</ul>;
}


