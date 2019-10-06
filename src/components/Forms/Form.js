/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Button, Field } from "../";

const Buttons = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 100%;
	> * {
		width: 45%;
	}
`;
function Form({
	handleFieldChange,
	handleAddContact,
	handleEditContact,
	typeModal,
	handleModal,
	fields
}) {
	return (
		<form>
			<Field
				name="name"
				label="Name"
				type="text"
				require="require"
				value={fields.name}
				onChange={ev => handleFieldChange(ev.target.name, ev.target.value)}
			></Field>
			<Field
				name="email"
				label="Email"
				type="email"
				require="require"
				value={fields.email}
				onChange={ev => handleFieldChange(ev.target.name, ev.target.value)}
			></Field>
			<Field
				name="phone"
				label="Phone"
				type="number"
				require="require"
				value={fields.phone}
				onChange={ev => handleFieldChange(ev.target.name, ev.target.value)}
			></Field>
			<Field
				name="favorite"
				label="Favorite contact"
				type="checkbox"
				checked={fields.favorite}
				onChange={ev => handleFieldChange(ev.target.name, ev.target.checked)}
			></Field>
			<Buttons>
				<Button onClick={handleModal} revers>
					Cancel
				</Button>
				<Button
					onClick={
						typeModal == 0 ? handleAddContact : () => handleEditContact()
					}
				>
					{typeModal == 0 ? "Create" : "Modify"}
				</Button>
			</Buttons>
		</form>
	);
}

export default Form;
