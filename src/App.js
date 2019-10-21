import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Home} />
			<PrivateRoute exact path="/hacks" component={hacks} />
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
