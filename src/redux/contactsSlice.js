import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      if (state.find(contact => contact.name === name)) {
        return alert(`${name} is already in contacts!`);
      }
      const contact = { id: nanoid(), name, number };
      state.push(contact);
    },

    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
