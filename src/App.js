import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import HomePage from "./components/RestaurantsContent";
import RestaurantPage from "./components/Restaurant";
import OrderPage from "./components/Order.js";
import { Route, Switch, Redirect} from 'react-router-dom';
<<<<<<< HEAD
=======
import MenuPage from "./components/MenuContent.js";
import ServicePage from "./components/Service.js";
>>>>>>> 9667db9012ceb62ca5a1c607c585c20f195b5397

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
				{/* <Sidebar current = {this.state.current} changeCurrent = {this.changeCurrent} /> */}
				<Switch>
					<Route exact path='/' render={(props) => <HomePage changeCurrent = {this.changeCurrent} />} />
					<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent = {this.changeCurrent} />} />
<<<<<<< HEAD
=======
					<Route exact path='/menu' render={(props) => <MenuPage />} />
					<Route exact path='/service' render={(props) => <ServicePage />} />
>>>>>>> 9667db9012ceb62ca5a1c607c585c20f195b5397
					<Route exact path='/order' render={(props) => <OrderPage />} />
					<Redirect to='/' />
				</Switch>
				</content>
			</div>
		)
	}
}

export default App;
