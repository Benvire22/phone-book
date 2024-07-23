import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {fetchContacts} from './contactsThunks';

export interface ContactsState {
  contacts: Contact[];
  fetchLoading: boolean;
  contactDeleting: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  fetchLoading: false,
  contactDeleting: false,
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
    })

  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectFetchLoading: (state) => state.fetchLoading,
    selectContactDeleting: (state) => state.contactDeleting,
  }
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectContacts,
  selectContactDeleting,
  selectFetchLoading,
} = contactsSlice.selectors;