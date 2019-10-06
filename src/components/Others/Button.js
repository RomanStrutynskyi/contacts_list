import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { font, palette } from "styled-theme";
import { ifProp } from "styled-tools";

const fontSize = ({ height }) => `${height / 40}rem`;

const styles = css`
	display: inline-flex;
	font-family: ${font("primary")};
	align-items: center;
	white-space: nowrap;
	font-size: ${fontSize};
	border: 1px solid currentColor;
	height: 2.5em;
	justify-content: center;
	text-decoration: none;
	cursor: pointer;
	appearance: none;
	padding: 0 1.5em;
	border-radius: 7px;
	box-sizing: border-box;
	transition: color 250ms ease-out;
	background-color: ${ifProp(
		"revers",
		palette("light", 0),
		palette("primary", 0)
	)};
	color: ${ifProp("revers", palette("primary", 3), palette("light", 0))};
	outline: none;

	&:hover,
	&:focus,
	&:active {
		color: ${ifProp(
			"revers",
			palette("primary", 0),
			palette("primary", 0, true)
		)};
	}

	&:focus {
		outline: none;
	}
`;

const StyledLink = styled(({ ...props }) => <Link {...props} />)`
	${styles}
`;

const Anchor = styled.a`
	${styles}
`;
const StyledButton = styled.button`
	${styles}
`;

const Button = ({ type, ...props }) => {
	const { to, href } = props;
	if (to) {
		return <StyledLink {...props} />;
	}
	if (href) {
		return <Anchor {...props} />;
	}
	return <StyledButton {...props} type={type} />;
};

Button.propTypes = {
	type: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string
};

Button.defaultProps = {
	type: "button"
};

export default Button;
