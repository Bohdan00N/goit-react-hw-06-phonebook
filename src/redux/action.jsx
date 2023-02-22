import { createAction, nanoid } from '@reduxjs/toolkit';

export const AddContact = createAction(
    'contacts/addContact',
    (name, number) => { 
        return {
            type: 'contacts/addContact',
            payload: {
                id: nanoid(3),
                name: name,
                number: number,
            }
        }
    }
);