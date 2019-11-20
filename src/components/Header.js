import React, { Component } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css"
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container mt-3">
                <div className="input-group">
                    <GiHamburgerMenu className="mt-2 mr-3" style={{color: 'red'}} size={24} />

                    <NavLink exact to="/" style={{ textDecoration: 'none' }}><img id="logo" src="img/logo_text-01.png" alt="logo" /></NavLink>

                    <input type="text" id="search-desktop" className="form-control mt-2 ml-3 mr-2"
                        placeholder="Search restaurants... ">
                    </input>

                    <button id="desktop-search" className="search-button">Search</button>


                    <NavLink exact to="/order" style={{ textDecoration: 'none' }}><FiShoppingCart className="mt-1"size={35}/></NavLink>
                </div>
            </header>
        );
    }
}

export default Header;
