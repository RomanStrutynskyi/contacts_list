import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";

const styles = css`
	font-family: ${font("primary")};
	display: block;
	width: 100%;
	margin: 0;
	box-sizing: border-box;
	font-size: 14px;
	padding: 0 10px;
	height: 40px;
	color: ${palette("dark", 0)};
	background-color: ${palette("light", 1)};
	border: 1px solid ${palette("primary", 2)};
	border-radius: 7px;
	transition: border-color 250ms ease-out;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
	outline: none;
	&:focus {
		border: 1px solid ${palette("primary", 3)};
	}
`;

const Input = styled(({ ...props }) => <input {...props} />)`
	${styles}
`;

Input.propTypes = {
	type: PropTypes.string,
	height: PropTypes.number
};

Input.defaultProps = {
	type: "text",
	height: 40
};

export default Input;
