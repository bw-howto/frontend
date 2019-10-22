import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import LandingPage from "./components/LandingPage";
import TopPosts from "./components/TopPosts";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={LandingPage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/logout" component={Logout} />
			<PrivateRoute exact path="/top-posts" component={TopPosts} />
		</div>
	);
}

export default App;
