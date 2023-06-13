import { createSlice, nanoid } from '@reduxjs/toolkit';
import contacts from '../components/contacts.json';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
