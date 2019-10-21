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
			<Route path ="/register" component = {Register} />
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
