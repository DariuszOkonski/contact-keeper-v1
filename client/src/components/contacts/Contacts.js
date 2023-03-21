import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <div>
      {filtered !== null ?
        filtered.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        )) :
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      }
    </div>
  );
};

export default Contacts;
