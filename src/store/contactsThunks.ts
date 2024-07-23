import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContacts, Contact} from '../types';
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