import React, { Component } from 'react';

import "../App.css";

class OrderContent extends Component {
    render() {
        return (
            <>
                <div id="order-container" className="hidden">
                    <div id="order-screen">
                        <div id="quantity-screen">
                            <button id="quantity-sub" className="quantity-setter sub">-</button>
                            <input id="quantity" type="text" value="1" />
                            <button id="quantity-add" className="quantity-setter">+</button>
                        </div>
                        <div className="order-center">
                            <button id="quantity-addBtn">ADD</button>
                        </div>
                        <div id="message" className="order-center alert alert-success hidden"><strong>SUCCESS!</strong></div>
                    </div>
                </div>
                <div id="order-overlay" className="hidden"></div>
            </>
        );
    }
}

export default OrderContent;