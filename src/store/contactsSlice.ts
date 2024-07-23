import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';

export interface ContactsState {
  contacts: Contact[];
  fetchLoading: boolean;
  contactDeleting: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  fetchLoading: false,
  contactDeleting: false,
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: () => {

  },
  selectors: {}
})

export const contactsReducer = contactsSlice.reducer;