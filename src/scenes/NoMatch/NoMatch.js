import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { routes } from "../routes";

const Wrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

const NoMatch = () => {
	return (
		<Wrapper>
			<h1>Page not found!</h1>
			<Button to={routes.all}>Back to home</Button>
		</Wrapper>
	);
};

export default NoMatch;
