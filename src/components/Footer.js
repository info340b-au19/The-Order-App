import React, { Component } from 'react';
import "../App.css";
import { NavLink } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="float-right mt-3 mr-3">Copyright © 2019 Order Inc.</p>

                <NavLink to="/about"><p className="float-right mt-3 mr-3"><button className="about">About Us</button></p></NavLink>
            </footer>
        );
    }
}

export default Footer;