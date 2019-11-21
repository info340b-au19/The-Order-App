import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
//import RestaurantContent from "./components/RestaurantContent.js";
import HomePage from "./components/RestaurantsContent";
import RestaurantPage from "./components/Restaurant.js";
import OrderPage from "./components/Order.js";
import { Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

	constructor()
  {
    super();
 
    this.state = { screenOrientation: 'portrait' }
  }

//   isPortraitMode = () => {
// 	console.log(this.state);
// 	const { screenOrientation } = this.state;
// 	return screenOrientation === 'portrait';
//   }

  setScreenOrientation = () => {
	if (window.matchMedia("(orientation: portrait)").matches) {
	  console.log('orientation: portrait');
	  this.setState({
		screenOrientation: 'portrait'
	  });
	}

	if (window.matchMedia("(orientation: landscape)").matches) {
	  console.log('orientation: landscape');
	  this.setState({
		screenOrientation: 'landscape'
	  });
	}
  }

  componentDidMount() {
	window.addEventListener('resize', this.setScreenOrientation);
  }

	render() {

		// if(this.state.screenOrientation == 'portrait') {
			return (
				<div className="app">
					<Header />
					<content>
					{/* <Sidebar /> */}
	
					{/* UNCOMMENT TO SHOW TODO: IMPLEMENT SIDEBAR/NAVBAR FOR CONTENT */}
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/restaurant' component={RestaurantPage} /> 
						
						<Route exact path='/order' component={OrderPage} />
						<Redirect to='/' />
					</Switch>
					</content>
				</div>
			)

		// } else {
		// 	return (
		// 		<div className="app">
		// 			<Header />
		// 			<content>

	
		// 			{/* UNCOMMENT TO SHOW TODO: IMPLEMENT SIDEBAR/NAVBAR FOR CONTENT */}
		// 			<Switch>
		// 				<Route exact path='/' component={HomePage} />
		// 				<Route exact path='/home' component={RestaurantPage} />
		// 				{/* <Route exact path='/menu' component={MenuPage} />
		// 				<Route exact path='/service' component={ServicePage} /> */}
		// 				<Route exact path='/order' component={OrderPage} />
		// 				<Redirect to='/' />
		// 			</Switch>
		// 			</content>
		// 		</div>

		// 	)
		// }
		
		  


		
	}
}

export default App;
