import React, { Component } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css"
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"

class Header extends Component {
    constructor()
  {
    super();

    if (window.matchMedia("(orientation: portrait)").matches) {
        this.state = {screenOrientation: 'portrait'}
      }
  
      if (window.matchMedia("(orientation: landscape)").matches) {
        this.state = {screenOrientation: 'landscape'};
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
                    <GiHamburgerMenu className={ori==='portrait'? "mt-2 mr-3": "hide"} style={{color: "red", cursor: "pointer"}} size={24} onClick = {() => this.props.handleSidebar()} />

                    <NavLink exact to="/" style={{ textDecoration: 'none' }}><img id="logo" className={ori==='landscape'? "": "hide"}src="img/logo_text-01.png" alt="logo" /></NavLink>
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}><img id="logo" className={ori==='portrait'? "": "hide"}src="img/logo_transparent-01.png" alt="logo" /></NavLink>

                    <input type="text" id="search-desktop" className="form-control mt-2 ml-3 mr-2"
                        placeholder="Search restaurants... ">
                    </input>

                    {/* <button id="desktop-search" className="search-button btn btn-danger mr-2">Search</button> */}
                    <FiSearch className="mt-2 mr-3" size={30}/>


                    <NavLink exact to="/order" style={{ textDecoration: 'none' }}><FiShoppingCart className={ori==='landscape'? "mt-2": "hide"} size={32}/></NavLink>
                </div>
            </header>
        );
    }
}

export default Header;
