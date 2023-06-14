import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const pendingReducer = state => {
  state.isLoading = false;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getContactsFullfieldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFullfieldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
  const index = state.itemsfindIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const deleteContactFullfieldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.itemsfindIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, pendingReducer)
      .addCase(getContacts.fulfilled, getContactsFullfieldReducer)
      .addCase(getContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFullfieldReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFullfieldReducer)
      .addCase(deleteContact.rejected, rejectedReducer),
});

export const contactReducer = contactSlice.reducer;
