import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component = {Home} />
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
