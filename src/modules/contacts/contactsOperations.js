import * as actions from "./contactsActions";
import { saveContacts, changeContact } from "../../data/localStorage";

export function addContact(contact) {
	return async function addContactThunk(dispatch) {
		try {
			dispatch(actions.addContact.start());
			const res = await saveContacts(contact);
			dispatch(actions.addContact.success(res));
		} catch (err) {
			dispatch(actions.addContact.error());
		}
	};
}

export function editContact(contact) {
	return async function addContactThunk(dispatch) {
		try {
			dispatch(actions.editContact.start());
			const res = await changeContact(contact);
			dispatch(actions.editContact.success(res));
		} catch (err) {
			dispatch(actions.editContact.error());
		}
	};
}

export { actions };
