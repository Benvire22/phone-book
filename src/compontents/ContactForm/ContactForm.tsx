import {ApiContact, ContactMutation} from '../../types';
import React, { useState} from 'react';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {useParams} from 'react-router-dom';

const initialState: ContactMutation = {
  name: '',
  email: '',
  phone: '',
  photo: '',
};

interface Props {
  onSubmit: (contact: ApiContact) => void;
  isLoading: boolean
}

const ContactForm: React.FC<Props> = ({onSubmit, isLoading}) => {
  const [formData, setFormData] = useState(initialState);
  const {id} = useParams();

  const changeForm = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact: ApiContact = {
      ...formData,
      phone: parseInt(formData.phone),
    };

    onSubmit(newContact);
  };

  return (
    <>
      <div className="row px-5 fs-5">
        <h3 className="text-primary-emphasis text-center fs-1 mb-5">{id ? 'Edit' : 'Add'} contact</h3>
        <div className="row mt-2 justify-content-center">
          <div className="col-10 text-primary-emphasis">
            <form onSubmit={sendForm}>
              <div className="form-group mb-3">
                <label htmlFor="name" className="fs-4 mb-2">Contact Name</label>
                <input
                  type="text"
                  value={formData.name}
                  id="name"
                  name="name"
                  className="form-control border-primary fs-5 mb-3 py-2"
                  placeholder="Enter phone number"
                  onChange={changeForm}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="fs-4 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  id="email"
                  name="email"
                  className="form-control border-primary fs-5 mb-4 py-2"
                  placeholder="Enter email"
                  onChange={changeForm}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone" className="fs-4 mb-2">phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  id="phone"
                  name="phone"
                  className="form-control border-primary fs-5 mb-4 py-2"
                  placeholder="telephone"
                  onChange={changeForm}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="photo" className="fs-4 mb-2">Photo</label>
                <input
                  type="url"
                  value={formData.photo}
                  id="photo"
                  name="photo"
                  className="form-control border-primary fs-5 mb-4 py-2"
                  placeholder="Enter photo"
                  onChange={changeForm}
                  pattern="https://.*"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <h4 className="fw-normal">Preview photo</h4>
                <div className="col-2 my-2 mb-3 border">
                  <img className="w-100 h-auto" src={formData.photo} alt={formData.name}/>
                </div>
              </div>
              <button type="submit" className="btn btn-warning text-white fs-4 px-4 py-2 mb-3" disabled={isLoading}>
                {isLoading && <ButtonSpinner/>}
                save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
