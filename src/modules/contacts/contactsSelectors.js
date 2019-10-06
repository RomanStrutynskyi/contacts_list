import { createSelector } from "reselect";

const contacts = state => state.contacts.contacts;
const isModalOpen = state => state.contacts.isModalOpen;
const isLoading = state => state.contacts.isLoading;

export const getContacts = createSelector(
	contacts,
	state => state
);

export const getFavoriteContacts = createSelector(
	contacts,
	state => state.filter(({ favorite }) => favorite)
);

export const getModalStatus = createSelector(
	isModalOpen,
	state => state
);

export const getLoadingStatus = createSelector(
	isLoading,
	state => state
);
