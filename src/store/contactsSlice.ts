import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {addContact, deleteContact, fetchContacts} from './contactsThunks';

export interface ContactsState {
  contacts: Contact[];
  fetchLoading: boolean;
  contactDeleting: boolean;
  createContactLoading: boolean;
  deleteLoading: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  fetchLoading: false,
  contactDeleting: false,
  createContactLoading: false,
  deleteLoading: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
      addCase(fetchContacts.pending, (state) => {
      state.fetchLoading = true;
    }).addCase(fetchContacts.fulfilled, (state, {payload: contacts}) => {
      state.fetchLoading = false;
      state.contacts = contacts;
    }).addCase(fetchContacts.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder
      .addCase(addContact.pending, (state) => {
      state.createContactLoading = true;
    }).addCase(addContact.fulfilled, (state) => {
      state.createContactLoading = false;
    }).addCase(addContact.rejected, (state) => {
      state.createContactLoading = false;
    });

    builder
      .addCase(deleteContact.pending, (state) => {
      state.deleteLoading = true;
    }).addCase(deleteContact.fulfilled, (state) => {
      state.deleteLoading = false;
    }).addCase(deleteContact.rejected, (state) => {
      state.deleteLoading = false;
    });
  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectFetchLoading: (state) => state.fetchLoading,
    selectContactDeleting: (state) => state.contactDeleting,
    selectCreateContactLoading: (state) => state.createContactLoading,
    selectDeleteLoading: (state) => state.deleteLoading,
  }
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectContacts,
  selectContactDeleting,
  selectFetchLoading,
  selectCreateContactLoading,
  selectDeleteLoading
} = contactsSlice.selectors;