import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
//import RestaurantContent from "./components/RestaurantContent.js";
import MenuPage from "./components/MenuContent.js";
import HomePage from "./components/RestaurantsContent.js";
import RestaurantPage from "./components/RestaurantHomeContent.js";
import ServicePage from "./components/Service.js";
import OrderPage from "./components/Order.js";
import { Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<content>
				<Sidebar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={RestaurantPage} />
					<Route exact path='/menu' component={MenuPage} />
					<Route exact path='/service' component={ServicePage} />
					<Route exact path='/order' component={OrderPage} />
					<Redirect to='/' />
				</Switch>
				</content>
			</div>
		)
	}
}

export default App;
