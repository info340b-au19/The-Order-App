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
			orderedDishes:[],
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
		console.log(this.state.sidebarActive);
	}
	
	orderHandler = (newOrderDish, index) => {
		let newOrderedDishes = this.state.orderedDishes;
		newOrderedDishes.push(newOrderDish);
        this.setState(
            {
				orderedDishes:newOrderedDishes                 
            }
		);
		this.success(index);
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
				orderedDishes:[]                
            }
        );
	}

	render() {
		return (
			<div className="app">
				<Header handleSidebar={this.handleSidebar} />
				<content>
					<Sidebar
						current={this.state.current}
						changeCurrent={this.changeCurrent}
						sidebarActive={this.state.sidebarActive}
						handleSidebar={this.handleSidebar}
					/>
				<Switch>
					<Route exact path='/' render={(props) => <HomePage changeCurrent = {this.changeCurrent} />} />
					<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent = {this.changeCurrent} orderHandler={this.orderHandler.bind(this)} success={this.state.success} successIndex={this.state.successIndex} />} />
					<Route exact path='/order' render={(props) => <OrderPage orderedDishes = {this.state.orderedDishes} checkoutHandler={this.checkoutHandler.bind(this)}/>} />
					<Redirect to='/' />
				</Switch>
				</content>
			</div>
		)
	}
}

export default App;
