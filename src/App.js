import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";

import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component = {Home} />
		</div>
	);
}

export default App;
