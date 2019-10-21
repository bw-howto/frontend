import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			{/*<PrivateRoute exact path="/hacks" component={hacks} />*/}
		</div>
	);
}

export default App;
