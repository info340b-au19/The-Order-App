import React, { Component } from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav id="sidebar" className="active">
                    <div>
                        <p className="sbHead">McDonalds</p>
                    </div>

                    <ul>
                        <li>
                            <NavLink exact to="/" style={{ textDecoration: 'none'}}><button className={this.props.current === 0 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(0)}>Home</button></NavLink>
                        </li>
                        {/* <li>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}><button className={this.props.current === 1 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(1)}>Restaurant Home</button></NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink exact to="/menu" style={{ textDecoration: 'none'}}><button className={this.props.current === 2 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(2)}>Menu</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" style={{ textDecoration: 'none' }}><button className={this.props.current === 3 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(3)}>Service</button></NavLink>
                        </li> */}
                        <li>
                            <NavLink exact to="/order" style={{ textDecoration: 'none' }}><button className={this.props.current === 4 ? "sbButton current" : "sbButton"} onClick={() => this.props.changeCurrent(4)}>My Order</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
