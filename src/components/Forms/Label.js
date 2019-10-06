import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font, palette } from "styled-theme";

const StyledLabel = styled.label`
	font-family: ${font("primary")};
	color: ${palette("primary", 1)};
	font-size: 0.9rem;
	line-height: 2em;
	user-select: none;
`;

StyledLabel.propTypes = {
	reverse: PropTypes.bool
};

const Label = ({ ...props }) => {
	return <StyledLabel {...props} />;
};

export default Label;
