import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import HomePage from "./components/RestaurantsContent";
import RestaurantPage from "./components/Restaurant";
import OrderPage from "./components/Order.js";
import { Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
constructor(props) {
        super(props);
        this.state = {
			current: 0,
			orderedDishes:[]
        };
    }

    changeCurrent = (index) => {
        this.setState({
            current: index
        })
	}
	
	orderHandler = newOrderDish => {
		let newOrderedDishes = this.state.orderedDishes;
		newOrderedDishes.push(newOrderDish);
        this.setState(
            {
				orderedDishes:newOrderedDishes                    
            }
        );
	}
	
	checkoutHandler = () => {
		this.setState(
            {
				orderedDishes:[]                
            }
        );
	}

	render() {
		return (
			<div className="app">
				<Header />
				<content>
				{/* <Sidebar current = {this.state.current} changeCurrent = {this.changeCurrent} /> */}
				<Switch>
					<Route exact path='/' render={(props) => <HomePage changeCurrent = {this.changeCurrent} />} />
					<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent = {this.changeCurrent} orderHandler={this.orderHandler.bind(this)} />} />
					<Route exact path='/order' render={(props) => <OrderPage orderedDishes = {this.state.orderedDishes} checkoutHandler={this.checkoutHandler.bind(this)}/>} />
					<Redirect to='/' />
				</Switch>
				</content>
			</div>
		)
	}
}

export default App;
