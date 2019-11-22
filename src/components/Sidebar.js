import React, { Component } from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        let active = this.props.sidebarActive ? "active" : "";
        return (
            <div>
                <nav id="sidebar" className={active}>
                    <div>
                        <p className="sbHead">McDonalds</p>
                    </div>
                    <ul>
                        <li>
                            <NavLink exact to="/" style={{ textDecoration: 'none'}}><button className={this.props.current === 0 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(0)}>Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}><button className={this.props.current === 1 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(1)}>Restaurant Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/order" style={{ textDecoration: 'none' }}><button className={this.props.current === 2 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(4)}>My Order</button></NavLink>
                        </li>
                    </ul>
                </nav>
                <div id="sidebarOverlay" className={active} onClick={() => this.props.handleSidebar()}></div>
            </div>
        )
    }
}

export default Sidebar;
