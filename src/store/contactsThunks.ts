import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContact, ApiContacts, Contact, ContactMutation} from '../types';
import axiosApi from '../axiosApi';
import {AppDispatch} from '../app/store';

export const fetchContacts = createAsyncThunk<Contact[], undefined, {dispatch: AppDispatch}>(
  'contacts/fetchContacts',
  async () => {
    const {data: apiContacts} = await axiosApi.get<ApiContacts | null>('/contacts.json');

    if (!apiContacts) {
      return [];
    }

    return Object.keys(apiContacts).map((id) => {
      return {
        ...apiContacts[id],
        id: id,
      };
    });
  },
);

export const addContact = createAsyncThunk<void, ApiContact, {dispatch: AppDispatch}>(
  'contacts/addContact',
  async (contact) => {
    await axiosApi.post('/contacts.json', contact);
  }
);

export const deleteContact = createAsyncThunk<void, string, {dispatch: AppDispatch}>(
  'contacts/deleteContact',
  async (id) => {
    await axiosApi.delete(`/contacts/${id}.json`);
  }
);

export const getOneContact = createAsyncThunk<ContactMutation, string, {dispatch: AppDispatch}>(
  'contact/getOneContact',
  async (id) => {
    const {data: apiContact} = await axiosApi.get<ApiContact>(`/contacts/${id}.json`);

    return {
      ...apiContact,
      phone: apiContact.phone.toString()
    };
  },
);


export interface EditContactArg {
  id: string,
  contact: ApiContact
}

export const editContactData = createAsyncThunk<void, EditContactArg, {dispatch: AppDispatch}>(
  'contacts/editContact',
  async ({id, contact}) => {
    await axiosApi.put(`/contacts/${id}.json`, contact);
  }
);
