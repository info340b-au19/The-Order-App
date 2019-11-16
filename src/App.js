import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar.js";
import RestaurantContent from "./components/RestaurantContent.js";



class App extends Component {
	render() {
		return (
			<div className="app">
				<Sidebar />
				<RestaurantContent />
			</div>
		)
	}
}

export default App;
