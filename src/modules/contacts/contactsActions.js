import { createAction, createAsyncActions } from "@letapp/redux-actions";

export const addContact = createAsyncActions("contacts/ADD_CONTACT");
export const editContact = createAsyncActions("contacts/EDIT_CONTACT");
export const showModal = createAction("contacts/SHOW_MODAL");
