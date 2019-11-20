import React, { Component } from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav id="sidebar">
                    <div>
                        <p className="sbHead">McDonalds</p>
                    </div>

                    <ul>
                        <li>
                            <NavLink exact to="/" style={{ textDecoration: 'none' }}><button className="sbButton current">Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}><button className="sbButton">Restaurant Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/menu" style={{ textDecoration: 'none' }}><button className="sbButton">Menu</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" style={{ textDecoration: 'none' }}><button className="sbButton">Service</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/order" style={{ textDecoration: 'none' }}><button className="sbButton">My Order</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
