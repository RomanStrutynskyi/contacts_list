const getContacts = () => {
	const contacts = localStorage.getItem("contacts");
	if (contacts !== null) {
		return JSON.parse(contacts);
	}
	return [];
};

const serializedContacts = contacts => {
	const serialized = JSON.stringify(contacts);
	localStorage.setItem("contacts", serialized);
};

export const loadContacts = () => {
	try {
		return getContacts();
	} catch (error) {
		return undefined;
	}
};

export const saveContacts = contact => {
	try {
		const contacts = getContacts();
		contacts.push(contact);

		serializedContacts(contacts);

		return Promise.resolve().then(function() {
			return contact;
		});
	} catch (error) {
		console.error(error);
	}
};

export const changeContact = contact => {
	try {
		const contacts = getContacts();

		const modifyContacts = contacts.map(item => {
			if (item.id === contact.id) return contact;
			return item;
		});

		serializedContacts(modifyContacts);

		return Promise.resolve().then(function() {
			return modifyContacts;
		});
	} catch (error) {
		console.error(error);
	}
};
