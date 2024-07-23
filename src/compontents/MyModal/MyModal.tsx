import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Contact} from '../../types';
import {useAppSelector} from '../../app/hooks';
import {selectDeleteLoading} from '../../store/contactsSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {Link} from 'react-router-dom';
import {Envelope, Phone} from 'react-bootstrap-icons';

interface Props {
  isShow: boolean;
  contact: Contact;
  onClose: VoidFunction;
  onDelete: () => Promise<void>;
}

const MyModal: React.FC<Props> = ({isShow, contact, onClose, onDelete}) => {
  const isDeleting = useAppSelector(selectDeleteLoading);
  return (
    <Modal
      show={isShow}
      onHide={onClose}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="row gap-2 ps-2">
          <div className="col-4">
            <img className="w-100 h-auto d-inline-block border border-primary-subtle" src={contact.photo} alt={contact.name}/>
          </div>
          <div className="col-4 text-primary-emphasis">
            <h4 className="fs-2">{contact.name}</h4>
            <p><Phone className="mb-1 fs-4" /> Phone: {contact.phone}</p>
            <p><Envelope className=" mb-1 fs-4"/> Email: {contact.email}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`edit-contact/${contact.id}`} className="btn btn-primary" onClick={onClose}>
          Edit
        </Link>
        <Button variant="danger" disabled={isDeleting} onClick={onDelete}>
          {isDeleting && <ButtonSpinner/>}
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;