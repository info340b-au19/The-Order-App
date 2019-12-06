import React, { Component } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css"
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"
import { Badge } from 'reactstrap';
import { FaRegUserCircle } from "react-icons/fa";

class Header extends Component {

	constructor(props) {
		super(props);
		let portrait = window.matchMedia("(orientation: portrait)").matches;
		this.state = portrait ? { screenOrientation: 'portrait' } : { screenOrientation: 'landscape' };
	}

	setScreenOrientation = () => {
		if (window.matchMedia("(orientation: portrait)").matches) {
			this.setState({
				screenOrientation: 'portrait'
			});
		} else {
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

		if (ori === 'portrait') {
			return (
				<header className="mt-3 container">
					<div className="input-group">
						<GiHamburgerMenu className="mt-2 mr-3" style={{ color: "red", cursor: "pointer" }} size={24} onClick={() => this.props.handleSidebar()} />

						<NavLink exact to="/" style={{ textDecoration: 'none' }}><img id="logo" src="img/logo_transparent.png" alt="logo_notext" /></NavLink>

						<input type="text" id="search-desktop" className="form-control mt-2 ml-3 mr-2"
							placeholder="Search restaurants... ">
						</input>
						<FiSearch className="mt-2" size={30} />
						<FaRegUserCircle className="mt-2 ml-3" size={30} />
					</div>
				</header>
			);

		} else {
			let avatar = null;
			if (!this.props.user) { //if logged out, show default user picture
				avatar = (<NavLink exact to="/user" style={{ textDecoration: 'none' }}><FaRegUserCircle className="mt-2 ml-3" size={34} /></NavLink>)
			} else {
				avatar = (<NavLink exact to="/user" style={{ textDecoration: 'none' }}><img className="header-avatar mt-2 ml-3" src={this.props.user.photoURL} alt={this.props.user.displayName} /></NavLink>)
			}
			return (
				<header className="mt-3 container">
					<div className="input-group">
						<NavLink exact to="/" style={{ textDecoration: 'none' }}><img id="logo" src="img/logo_text.png" alt="logo_text" /></NavLink>
						<input type="text" id="search-desktop" className="form-control mt-2 ml-3 mr-2"
							placeholder="Search restaurants... ">
						</input>

						<FiSearch className="mt-2" size={30} />


						<div>
							<NavLink exact to="/order" style={{ textDecoration: 'none' }}><FiShoppingCart className="mt-2 ml-3" size={32} /></NavLink>
							<Badge color="danger" pill className={this.props.nOfOrdered ? "" : "hide"}>{this.props.nOfOrdered}</Badge>
						</div>
						{avatar}


					</div>
				</header>
			);
		}
	}
}

export default Header;
