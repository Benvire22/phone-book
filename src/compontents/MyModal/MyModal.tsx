import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Contact} from '../../types';
import { useAppSelector} from '../../app/hooks';
import {selectDeleteLoading} from '../../store/contactsSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {Link} from 'react-router-dom';

interface Props {
  isShow: boolean;
  contact: Contact;
  onClose: VoidFunction
  onDelete: () => Promise<void>
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
          <div className="row">
            <div className="col-3 d-flex border">
              <img className="w-100 h-auto d-inline-block" src={contact.photo} alt={contact.name}/>
            </div>
            <div className="col-4">
              <Modal.Title>{contact.name}</Modal.Title>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`edit-contact/${contact.id}`} className="btn btn-primary" onClick={onClose}>
            Edit
          </Link>
          <Button variant="danger" disabled={isDeleting} onClick={onDelete}>
            {isDeleting && <ButtonSpinner />}
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default MyModal;