import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createSlice({
  name: 'contacts:',
  initialState: {
    item: contactsList,
    filter: '',
  },
  reducers: {
    addContact(state, {payload}) {
      state.item = [...state.item, payload];
    },
    deleteContact(state, {payload}) {
      state.item = state.item.filter(num => num.id !== payload);
      Notify.info('Deleted')
    },
    filterValue(state, {payload}) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts-list',
  storage,
  whitelist: ['item'],
};

export const contactsReducer = persistReducer(persistConfig, contacts.reducer);
export const { addContact, deleteContact, filterValue } = contacts.actions;