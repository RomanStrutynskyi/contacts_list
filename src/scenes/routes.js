import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components";

import ContactScene from "./ContactScene/ContactScene";
import NoMatch from "./NoMatch/NoMatch";

export const routes = {
	all: "/",
	favorite: "/favorite"
};

export default function Routes() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path={routes.all} exact component={ContactScene} />
				<Route path={routes.favorite} component={ContactScene} />
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
	);
}
