import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

  console.log(contacts);

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
