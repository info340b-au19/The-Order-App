import React, { Component } from 'react';
import "../App.css";

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
                            <button className="sbButton current">Restaurants</button>
                        </li>
                        <li>
                            <button className="sbButton">Home</button>
                        </li>
                        <li>
                            <button className="sbButton">Menu</button>
                        </li>
                        <li>
                            <button className="sbButton">Service</button>
                        </li>
                        <li>
                            <button className="sbButton">My Order</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
