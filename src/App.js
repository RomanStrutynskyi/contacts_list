import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { palette } from "styled-theme/dist";
import "normalize.css";
import "./style/bootstrap-grid.scss";
import theme from "./themes/default";
import Routes from "./scenes/routes";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${palette("light", 1)};
  }
	* {
		box-sizing:border-box ;
	}
`;
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	);
};

export default App;
