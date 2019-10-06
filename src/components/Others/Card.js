import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { font, palette } from "styled-theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPen } from "@fortawesome/free-solid-svg-icons";
import { ifProp } from "styled-tools";
import { darken } from "polished";

const Wrapper = styled.div`
	background-color: ${palette("light", 0)};
	border-radius: 10px;
	box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
	font-family: ${font("primary")};
	min-width: 300px;
	width: 100%;
	margin: 15px 0 0;
	padding: 15px 10px 15px 15px;
	display: inline-flex;
	justify-content: space-between;
	position: relative;
	@media (max-width: 768px) {
		min-width: 250px;
		max-width: 350px;
	}
`;

const Buttons = styled.div`
	padding: 0 0 5px 5px;
`;

const Btn = styled.button`
	margin-left: 5px;
	border: 0;
	padding: 0;
	background-color: transparent;
	outline: none;
`;
const Icon = styled(FontAwesomeIcon)`
	color: ${ifProp("checked", "gold", "darkgray")};
	transition: color 0.35s;
	cursor: pointer;
	&:hover {
		color: ${ifProp("checked", darken(0.05, "gold"), "gray")};
	}
`;

const Text = styled.p`
	color: ${palette("primary", 1)};
	margin: 5px 0;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`;
const Name = styled(Text)`
	font-size: 18px;
	font-weight: 500;
	color: ${palette("primary", 0)};
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const Card = ({
	id,
	name,
	email,
	phone,
	favorite,
	handleModal,
	handleFavorite,
	...props
}) => {
	const fields = {
		id,
		name,
		email,
		phone,
		favorite
	};

	return (
		<Wrapper {...props}>
			<div>
				<Name>{name}</Name>
				<Text>{email}</Text>
				<Text>{phone}</Text>
			</div>
			<Buttons>
				<Btn onClick={() => handleModal(fields)}>
					<Icon icon={faPen} />
				</Btn>
				<Btn onClick={() => handleFavorite(fields)}>
					<Icon icon={faStar} checked={favorite} />
				</Btn>
			</Buttons>
		</Wrapper>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	favorite: PropTypes.bool,
	handleModal: PropTypes.func.isRequired,
	handleFavorite: PropTypes.func.isRequired
};
export default Card;
