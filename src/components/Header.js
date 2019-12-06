import React, { Component } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css"
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"
import { Badge } from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		if (window.matchMedia("(orientation: portrait)").matches) {
			this.state = { screenOrientation: 'portrait' }
		}

		if (window.matchMedia("(orientation: landscape)").matches) {
			this.state = { screenOrientation: 'landscape' };
		}
	}

	setScreenOrientation = () => {
		if (window.matchMedia("(orientation: portrait)").matches) {
			this.setState({
				screenOrientation: 'portrait'
			});
		}

		if (window.matchMedia("(orientation: landscape)").matches) {
			this.setState({
				screenOrientation: 'landscape'
			});
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.setScreenOrientation);
	}

	render() {
		let ori = this.state.screenOrientation;
		return (
			<header className="mt-3 container">
				<div className="input-group">
					<GiHamburgerMenu className={ori === 'portrait' ? "mt-2 mr-3" : "hide"} id="styleHam" size={24} onClick={() => this.props.handleSidebar()} />

					<NavLink exact to="/" id="styleLink3"><img id="logo" className={ori === 'landscape' ? "" : "hide"} src="img/logo_text.png" alt="logo_text" /></NavLink>
					<NavLink exact to="/" id="styleLink4"><img id="logo" className={ori === 'portrait' ? "" : "hide"} src="img/logo_transparent.png" alt="logo_notext" /></NavLink>

					<input type="text" id="search-desktop" className="form-control mt-2 ml-3 mr-2"
						placeholder="Search restaurants... ">
					</input>

					<FiSearch className="mt-2" size={30} />

					<div>
						<NavLink exact to="/order" id="styleLink5"><FiShoppingCart className={ori === 'landscape' ? "mt-2 ml-3" : "hide"} size={32} /></NavLink>
						<Badge color="danger" pill className={this.props.nOfOrdered && ori === 'landscape' ? "" : "hide"}>{this.props.nOfOrdered}</Badge>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
