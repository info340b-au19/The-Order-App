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
constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    changeCurrent = (index) => {
        this.setState({
            current: index
        })
    }

	render() {
		return (
			<div className="app">
				<Header />
				<content>
				<Sidebar current = {this.state.current} changeCurrent = {this.changeCurrent} />
				<Switch>
					<Route exact path='/' render={(props) => <HomePage changeCurrent = {this.changeCurrent} />} />
					<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent = {this.changeCurrent} />} />
					<Route exact path='/menu' render={(props) => <MenuPage />} />
					<Route exact path='/service' render={(props) => <ServicePage />} />
					<Route exact path='/order' render={(props) => <OrderPage />} />
					<Redirect to='/' />
				</Switch>
				</content>
			</div>
		)
	}
}

export default App;
