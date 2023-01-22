import React from 'react';
import { ListElement, DeleteBtn } from './listContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { removeContact } from 'redux/contacts/contact-slice';


export default function ListContact() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) => {
      const normalizeName = name.toLocaleLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  };


  const elements = getFilteredContacts().map(({ name, number, id }) => {
    return (
      <ListElement key={id}>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => onRemoveContact(id)}>
          Delete
        </DeleteBtn>
      </ListElement>
    );
  });
  return <ul>{elements}</ul>;
}




