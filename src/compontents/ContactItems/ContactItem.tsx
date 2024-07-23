import {Contact} from '../../types';
import React, {useState} from 'react';
import MyModal from '../MyModal/MyModal';

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div className="card border" style={{cursor: 'pointer'}} key={contact.id} onClick={showModal}>
        <h4>{contact.name}</h4>
        <strong>{contact.email}</strong>
        <strong>{contact.phone}</strong>
      </div>
      <MyModal
        isShow={show}
        onClose={closeModal}
        contact={contact}
      />
    </>
  );
};

export default ContactItem;