import {Contact} from '../../types';
import React from 'react';
import MyModal from '../MyModal/MyModal';
import {deleteContact, fetchContacts} from '../../store/contactsThunks';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {closeModal, onModal, selectShowModal} from '../../store/contactsSlice';

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShowModal);

  const onDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      onClose();
      await dispatch(fetchContacts());
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  const showModal = () => {
    dispatch(onModal());
  };

  return (
    <>
      <div className="card col-10 btn border-primary p-3 mb-4" key={contact.id} onClick={showModal}>
        <div className="col-1 d-flex align-items-center gap-5">
          <img className="w-100 h-auto d-inline-block border border-primary-subtle" src={contact.photo} alt={contact.name}/>
          <h4 className="text-primary-emphasis fs-1">{contact.name}</h4>
        </div>
      </div>
      <MyModal
        isShow={show}
        onClose={onClose}
        contact={contact}
        onDelete={onDelete}
      />
    </>
  );
};

export default ContactItem;