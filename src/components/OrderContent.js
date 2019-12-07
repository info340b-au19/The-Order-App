import React, { Component } from 'react';

import "../App.css";

class OrderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    // Adds  1 to the quantity
    add() {
        this.setState({
            value: this.state.value + 1
        })
    }

    // Subtracts 1 to the quantity
    subtract() {
        if (this.state.value - 1 !== -1) {
            this.setState({
                value: this.state.value - 1
            })
        }
    }

    render() {
        return (
            <>
                <div id="order-container">
                    <div id="order-screen">
                        <div id="quantity-screen">
                            <button id="quantity-sub" className="quantity-setter sub" onClick={() => this.subtract()} >-</button>
                            <input id="quantity" type="text" value={this.state.value} />
                            <button id="quantity-add" className="quantity-setter" onClick={() => this.add()}>+</button>
                        </div>
                        <div className="order-center">
                            <button id="quantity-addBtn" onClick={() => this.props.toggleOrder()}>ADD</button>
                        </div>
                        <div id="message" className="order-center alert alert-success hidden"><strong>SUCCESS!</strong></div>
                    </div>
                </div>
                <div id="order-overlay" onClick={() => this.props.toggleOrder()} ></div>
            </>
        );
    }
}

export default OrderContent;