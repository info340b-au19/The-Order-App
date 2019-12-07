import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import HomePage from "./components/RestaurantsContent";
import RestaurantPage from "./components/Restaurant";
import OrderPage from "./components/Order.js";
import ProfilePage from "./components/Profile.js";
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import AboutProfile from './components/AboutProfile';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			orderedDishes: [],  //save ordered dishes 
			sidebarActive: false,
			success: false,
			successIndex: 0,
			loading: true
		};
	}

	componentDidMount() {
		this.authUnRegFunc = firebase.auth().onAuthStateChanged((user) => {
			this.setState({ loading: false });
			if (user) {
				this.setState({ user: user });
			} else {
				this.setState({ user: null });
			}
		}
		);
	}

	componentWillUnmount() {
		this.authUnRegFunc();
	}
	//A callback function for registering new users
	handleSignUp = (email, password, handle, avatar) => {
		this.setState({ errorMessage: null }); //clear any old errors

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				let user = userCredentials.user;
				console.log('User created: ' + user.uid);
				firebase.auth().currentUser.updateProfile({
					displayName: handle,
					photoURL: avatar
				}).catch(function (error) {
					// An error happened.
					this.setState({ errorMessage: error.message })
				})
			}
			).catch((error) => { //report any errors
				this.setState({ errorMessage: error.message })
			});
	}

	//A callback function for logging in existing users
	handleSignIn = (email, password) => {
		this.setState({ errorMessage: null }); //clear any old errors
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch((error) => { //report any errors
				this.setState({ errorMessage: error.message })
			});
	}

	//A callback function for logging out the current user
	handleSignOut = () => {
		this.setState({ errorMessage: null }); //clear any old errors
		firebase.auth().signOut();
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
		// function to calculate the number of ordered items and then display on cart
		for (let i = 0; i < this.state.orderedDishes.length; i++) {
			nOfOrdered += this.state.orderedDishes[i].quantity;
		}



		return (
			<div className="app">
				<Header handleSidebar={this.handleSidebar} nOfOrdered={nOfOrdered} user={this.state.user} />
				<main>
					<Sidebar
						current={this.state.current}
						changeCurrent={this.changeCurrent}
						sidebarActive={this.state.sidebarActive}
						handleSidebar={this.handleSidebar}
					/>
					<Switch>
						<Route exact path='/' render={(props) => <HomePage changeCurrent={this.changeCurrent} />} />
						<Route exact path='/home' render={(props) => <RestaurantPage changeCurrent={this.changeCurrent} user={this.state.user} loading={this.state.loading} orderHandler={this.orderHandler.bind(this)} success={this.state.success} successIndex={this.state.successIndex} />} />
						<Route exact path='/order' render={(props) => <OrderPage changeCurrent={this.changeCurrent} orderedDishes={this.state.orderedDishes} checkoutHandler={this.checkoutHandler.bind(this)} />} />
						<Route exact path='/user' render={(props) => <ProfilePage changeCurrent={this.changeCurrent} user={this.state.user} loading={this.state.loading} errorMessage={this.state.errorMessage} handleSignUp={this.handleSignUp.bind(this)} handleSignOut={this.handleSignOut.bind(this)} handleSignIn={this.handleSignIn.bind(this)} />} />
						<Route exact path='/about' render={(props) => <About />} />
						<Route exact path="/about/:name" component={AboutProfile} />
						<Redirect to='/' />
					</Switch>

					<Footer />
				</main>
				
			</div>
		);
	}
}




export default App;
