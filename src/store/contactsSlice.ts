import {createSlice} from '@reduxjs/toolkit';
import {Contact, ContactMutation} from '../types';
import {addContact, deleteContact, editContactData, fetchContacts, getOneContact} from './contactsThunks';

export interface ContactsState {
  contacts: Contact[];
  fetchLoading: boolean;
  contactDeleting: boolean;
  createContactLoading: boolean;
  deleteLoading: boolean;
  editLoading: boolean;
  fetchOneContactLoading: boolean;
  existingContact: null | ContactMutation;
}

const initialState: ContactsState = {
  contacts: [],
  fetchLoading: false,
  contactDeleting: false,
  createContactLoading: false,
  deleteLoading: false,
  fetchOneContactLoading: false,
  editLoading: false,
  existingContact: null,
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

    builder.addCase(getOneContact.pending, (state) => {
      state.fetchOneContactLoading = true;
    }).addCase(getOneContact.fulfilled, (state, {payload: existingContact} ) => {
      state.fetchOneContactLoading = false;
      state.existingContact = existingContact;
    }).addCase(getOneContact.rejected, (state) => {
      state.fetchOneContactLoading = false;
    });

    builder.addCase(editContactData.pending, (state) => {
      state.editLoading = true;
    }).addCase(editContactData.fulfilled, (state) => {
      state.editLoading = false;
    }).addCase(editContactData.rejected, (state) => {
      state.editLoading = false;
    });

  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectFetchLoading: (state) => state.fetchLoading,
    selectContactDeleting: (state) => state.contactDeleting,
    selectCreateContactLoading: (state) => state.createContactLoading,
    selectDeleteLoading: (state) => state.deleteLoading,
    selectEditLoading: (state) => state.editLoading,
    selectExistingContact: (state) => state.existingContact,
    fetchOneContactLoading: (state) => state.fetchOneContactLoading,
  }
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectContacts,
  selectContactDeleting,
  selectFetchLoading,
  selectCreateContactLoading,
  selectDeleteLoading,
  selectEditLoading,
  selectExistingContact,
  fetchOneContactLoading,
} = contactsSlice.selectors;