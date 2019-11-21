import React, { Component } from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    changeCurrent = (index) => {
        this.setState({
            current: index
        })
    }

    render() {
        return (
            <div>
                <nav id="sidebar">
                    <div>
                        <p className="sbHead">McDonalds</p>
                    </div>

                    <ul>
                        <li>
                            <NavLink exact to="/" style={{ textDecoration: 'none'}}><button className={this.state.current === 0 ? "sbButton current" : "sbButton"} onClick={() => this.changeCurrent(0)}>Home</button></NavLink>
                        </li>
                        {/* <li>
                            <NavLink exact to="/restaurant" style={{ textDecoration: 'none' }}><button className="sbButton">Restaurant Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/menu" style={{ textDecoration: 'none'}}><button className={this.state.current === 2 ? "sbButton current" : "sbButton"} onClick={() => this.changeCurrent(2)}>Menu</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" style={{ textDecoration: 'none' }}><button className="sbButton">Service</button></NavLink>
                        </li> */}
                        <li>
                            <NavLink exact to="/order" style={{ textDecoration: 'none' }}><button className={this.state.current === 4 ? "sbButton current" : "sbButton"} onClick={() => this.changeCurrent(4)}>My Order</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
