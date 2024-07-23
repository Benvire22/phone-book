import {Contact} from '../../types';
import React from 'react';
import {useAppDispatch} from '../../app/hooks';
import { getCurrentContact, onModal} from '../../store/contactsSlice';

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  const dispatch = useAppDispatch();

  const showModal = () => {
    dispatch(onModal());
    dispatch(getCurrentContact(contact));
  };

  return (
    <>
      <div className="card col-10 btn border-primary p-3 mb-4" key={contact.id} onClick={showModal}>
        <div className="col-1 d-flex align-items-center gap-5">
          <img className="w-100 h-auto d-inline-block border border-primary-subtle" src={contact.photo} alt={contact.name}/>
          <h4 className="text-primary-emphasis fs-1">{contact.name}</h4>
        </div>
      </div>
    </>
  );
};

export default ContactItem;