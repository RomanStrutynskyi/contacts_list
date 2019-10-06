import { handleActions } from "@letapp/redux-actions";
import * as actions from "./contactsActions";
import { loadContacts } from "../../data/localStorage";

const contacts = loadContacts();

const initialState = {
	contacts: contacts !== undefined ? contacts : [],
	isModalOpen: false,
	isLoading: false,
	isError: false
};

export default handleActions(
	{
		[actions.addContact.start]: state => ({
			...state,
			isLoading: true,
			isError: false
		}),
		[actions.addContact.success]: (state, action) => ({
			...state,
			isLoading: false,
			contacts: state.contacts.concat(action.payload)
		}),
		[actions.addContact.error]: state => ({
			...state,
			isLoading: false,
			isError: true
		}),
		[actions.editContact.start]: state => ({
			...state,
			isLoading: true,
			isError: false
		}),
		[actions.editContact.success]: (state, action) => ({
			...state,
			isLoading: false,
			contacts: action.payload
		}),
		[actions.editContact.error]: state => ({
			...state,
			isLoading: false,
			isError: true
		}),
		[actions.showModal]: (state, action) => ({
			...state,
			isModalOpen: action.payload
		})
	},
	initialState
);
