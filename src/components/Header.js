import React from "react";
import styled from "styled-components";
import { font, palette } from "styled-theme";
import { ifProp } from "styled-tools";
import { useLocation } from "react-router";
import { routes } from "../scenes/routes";
import { Link } from "./";
const StyledHeader = styled.header`
	font-family: ${font("primary")};
	color: ${palette("dark", 0)};
	font-size: 1rem;
	line-height: 2em;
	height: 60px;
	user-select: none;
	display: inline-flex;
	align-items: center;
	width: 100%;
	background-color: ${palette("light", 0)};
	box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.1);
	margin-bottom: 25px;
`;
const StyledNav = styled.nav`
	margin: 0px;
`;

const StyledLink = styled(Link)`
	margin: 0 5px;
	text-transform: uppercase;
	transition: color 0.35s;
	color: ${ifProp("active", palette("primary", 0), palette("primary", 1))};
	&:hover {
		color: ${palette("primary", 0)};

		text-decoration: none;
	}
`;

const listLinks = () => {
	let location = useLocation();

	return Object.entries(routes).map(([name, path], index) => (
		<StyledLink key={index} to={path} active={location.pathname === path}>
			{name}
		</StyledLink>
	));
};

const Header = ({ ...props }) => {
	return (
		<StyledHeader {...props}>
			<div className="container">
				<StyledNav className="row">{listLinks()}</StyledNav>
			</div>
		</StyledHeader>
	);
};

export default Header;
