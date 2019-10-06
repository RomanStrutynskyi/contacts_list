/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers, withStateHandlers, withState } from "recompose";
import uuid from "uuid/v4";
import { Button, Card, Modal, Form } from "../../components";
import { contactsOperations, contactsSelectors } from "../../modules/contacts";

function ContactScene({
	handleFieldChange,
	handleAddContact,
	handleModal,
	fields,
	isModalOpen,
	isLoading,
	match,
	typeModal,
	...props
}) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<Button onClick={handleModal}>
						{isLoading ? "Loading..." : "Add contact"}
					</Button>
				</div>
				{switchList(match.path, props)}
				<Modal
					isOpen={isModalOpen}
					title={`${typeModal == 0 ? "Add" : "Edit"} user`}
				>
					<Form
						handleFieldChange={handleFieldChange}
						handleAddContact={handleAddContact}
						handleEditContact={props.handleEditContact}
						typeModal={typeModal}
						handleModal={handleModal}
						fields={fields}
					/>
				</Modal>
			</div>
		</div>
	);
}

const contactsList = (list, handleModalEdit, handleEditContact) =>
	list.map(item => (
		<div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
			<Card
				id={item.id}
				name={item.name}
				phone={item.phone}
				email={item.email}
				favorite={item.favorite}
				handleModal={handleModalEdit}
				handleFavorite={handleEditContact}
			/>
		</div>
	));

const switchList = (path, props) => {
	const typeList = path.replace("/", "") === "" ? "allList" : "favoriteList";

	return contactsList(
		props[typeList],
		props.handleModalEdit,
		props.handleEditContact
	);
};

const mapDispatchToProps = {
	addContact: contactsOperations.addContact,
	editContact: contactsOperations.editContact,
	showModal: contactsOperations.actions.showModal,
	isLoading: contactsOperations.actions.isLoading
};
const mapStateToProps = state => ({
	allList: contactsSelectors.getContacts(state),
	favoriteList: contactsSelectors.getFavoriteContacts(state),
	isModalOpen: contactsSelectors.getModalStatus(state),
	isLoading: contactsSelectors.getLoadingStatus(state)
});

const fields = {
	name: "",
	email: "",
	phone: "",
	favorite: false
};

const cleanModal = props => {
	for (const name in fields) {
		props.handleFieldChange(name, fields[name]);
	}
};

const emptyField = props => {
	return Object.values(props.fields).some(item => item === "");
};

const enhancer = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState("typeModal", "changeTypeModal", 0),
	withStateHandlers(
		{
			fields: fields
		},
		{
			handleFieldChange: state => (fieldName, value) => ({
				...state,
				fields: {
					...state.fields,
					[fieldName]: value
				}
			})
		}
	),
	withHandlers({
		handleAddContact: props => () => {
			const contact = {
				...props.fields,
				id: uuid()
			};

			if (!emptyField(props)) {
				props.addContact(contact);
				props.showModal(!props.isModalOpen);

				cleanModal(props);
			}
		},
		handleEditContact: props => (contactData = null) => {
			if (contactData !== null) {
				contactData.favorite = !contactData.favorite;
				props.editContact(contactData);
			} else {
				if (!emptyField(props)) {
					props.editContact({ ...props.fields });

					props.showModal(!props.isModalOpen);

					cleanModal(props);
				}
			}
		},
		handleModalEdit: props => (contactData = null) => {
			if (contactData !== null) {
				props.changeTypeModal(1);

				for (const name in contactData) {
					props.handleFieldChange(name, contactData[name]);
				}
			}

			props.showModal(!props.isModalOpen);
			if (props.isModalOpen) cleanModal(props);
		},
		handleModal: props => () => {
			props.showModal(!props.isModalOpen);

			if (props.isModalOpen) {
				cleanModal(props);
			} else {
				props.changeTypeModal(0);
			}
		}
	})
);

export default enhancer(ContactScene);
