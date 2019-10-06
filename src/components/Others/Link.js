import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";
import { NavLink } from "react-router-dom";

const styles = css`
	font-family: ${font("primary")};
	text-decoration: none;
	font-weight: 500;
	color: ${palette("dark", 0)};

	&:hover {
		text-decoration: underline;
	}
`;

export const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
	${styles}
`;

export const Anchor = styled.a`
	${styles}
`;

const Link = ({ ...props }) => {
	const { to } = props;
	if (to) {
		return <StyledNavLink {...props} />;
	}
	return <Anchor {...props} />;
};

Link.propTypes = {
	to: PropTypes.string
};

export default Link;
