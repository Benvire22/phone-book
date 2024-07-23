import {Contact} from '../../types';
import React, {useState} from 'react';
import MyModal from '../MyModal/MyModal';
import {deleteContact, fetchContacts} from '../../store/contactsThunks';
import {useAppDispatch} from '../../app/hooks';

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const onDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      closeModal();
      await dispatch(fetchContacts());
    } catch (e) {
      console.error(e);
    }
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
        onDelete={onDelete}
      />
    </>
  );
};

export default ContactItem;