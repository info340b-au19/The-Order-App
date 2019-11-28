import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import HomePage from "./components/RestaurantsContent";
import RestaurantPage from "./components/Restaurant";
import OrderPage from "./components/Order.js";
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			orderedDishes: [],  //save ordered dishes 
			sidebarActive: false,
			success: false,
			successIndex: 0
		};
	}

	changeCurrent = (index) => {
		this.setState({
			current: index,
			sidebarActive: false
		})
	}

	handleSidebar = () => {
		this.setState({
			sidebarActive: !this.state.sidebarActive
		})
	}

	orderHandler = (newOrderDish) => {
		let newOrderedDishes = this.state.orderedDishes;
		if (this.state.orderedDishes.length === 0) {
			newOrderDish.quantity = 1;
			newOrderedDishes.push(newOrderDish);
		} else {
			let ifOrdered = false;
			for (let i = 0; i < this.state.orderedDishes.length; i++) {		
				if (newOrderDish.info.foodName === this.state.orderedDishes[i].info.foodName) {
					newOrderDish.quantity += 1;
					ifOrdered = true;
				}
				if (ifOrdered) break; 
			}
			if (!ifOrdered) {
				newOrderDish.quantity = 1;
				newOrderedDishes.push(newOrderDish);
			}
		}

		this.setState(
			{
				orderedDishes: newOrderedDishes
			}
		);
		// this.success(index);
	}

	success = (index) => {
		this.setState({
			success: !this.state.success,
			successIndex: index
		})

		setTimeout(() => {
			this.setState({
				success: !this.state.success,
				successIndex: 0
			})
		}, 2000);
	}

	checkoutHandler = () => {
		this.setState(
			{
				orderedDishes: []
			}
		);
	}

	
	render() {
		let nOfOrdered = 0;
		for (let i = 0; i < this.state.orderedDishes.length; i++) {
			nOfOrdered += this.state.orderedDishes[i].quantity;		
			}

		return (
			<div className="app">
				<Header handleSidebar={this.handleSidebar} nOfOrdered={nOfOrdered}/>
				<content>
					<Sidebar
						current={this.state.current}
						changeCurrent={this.changeCurrent}
						sidebarActive={this.state.sidebarActive}
						handleSidebar={this.handleSidebar}
					/>
					<Switch>
						<Route exact path='/' render={(props) => <HomePage changeCurrent={this.changeCurrent} />} />
						<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent={this.changeCurrent} orderHandler={this.orderHandler.bind(this)} success={this.state.success} successIndex={this.state.successIndex} />} />
						<Route exact path='/order' render={(props) => <OrderPage changeCurrent={this.changeCurrent} orderedDishes={this.state.orderedDishes} checkoutHandler={this.checkoutHandler.bind(this)} />} />
						<Redirect to='/' />
					</Switch>
				</content>
			</div>
		)
	}
}

export default App;
