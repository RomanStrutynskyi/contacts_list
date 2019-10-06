import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";
import { ifProp } from "styled-tools";

const Error = styled.div`
	margin: 0.5rem 0 0;
`;

const Wrapper = styled.div`
	margin-bottom: 1rem;
	width: 100%;
	display: ${ifProp("renderInputFirst", "inline-flex", "block")};
	align-items: ${ifProp("renderInputFirst", "center", "flex-start")};

	input[type="checkbox"],
	input[type="radio"] {
		margin-right: 0.5rem;
		width: auto;
		height: auto;
	}
	label {
		vertical-align: middle;
	}
`;

const Field = ({ error, name, invalid, label, type, ...props }) => {
	const inputProps = {
		id: name,
		name,
		type,
		invalid,
		"aria-describedby": `${name}Error`,
		...props
	};
	const renderInputFirst = type === "checkbox" || type === "radio";
	return (
		<Wrapper renderInputFirst={renderInputFirst}>
			{renderInputFirst && <Input {...inputProps} />}
			{label && <Label htmlFor={inputProps.id}>{label}</Label>}
			{renderInputFirst || <Input {...inputProps} />}
			{invalid && error && (
				<Error id={`${name}Error`} role="alert" palette="danger">
					{error}
				</Error>
			)}
		</Wrapper>
	);
};

Field.propTypes = {
	name: PropTypes.string.isRequired,
	invalid: PropTypes.bool,
	error: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string
};

Field.defaultProps = {
	type: "text"
};

export default Field;
