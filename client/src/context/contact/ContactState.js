import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-333',
        type: 'professional',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    })
  }

  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    })
  }

  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, current: state.current, addContact, deleteContact, setCurrent, clearCurrent, updateContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
