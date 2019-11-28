import React, { Component } from 'react';

import "../App.css";
import { Table } from 'reactstrap';

class OrderPage extends Component {

    render() {
        let orderedDishes = this.props.orderedDishes;

        if (orderedDishes.length === 0) {
            return (
                <div id="myorder" className="content container">
                    <div className="card orderCard">
                        <p className="noItemAlert">No item in you cart.</p>
                    </div>
                </div>
            );

        } else {

            let orderedDishesLines = orderedDishes.map((dish) => {
                return (
                    <tr key={dish.info.foodName}>
                        <td>{dish.info.foodName}</td>
                        <td>{dish.quantity}</td>
                        <td>{dish.info.price}</td>
                    </tr>);
            })
            let totalPrice = 0;
            // eslint-disable-next-line
            orderedDishes.map((dish) => {
                totalPrice += parseFloat(dish.info.price);
                return 0;
            })

            return (
                <div id="myorder" className="content container">
                    <div className="card orderCard">

                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>Dish</th>
                                    <th>Qt.</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderedDishesLines}
                            </tbody>
                        </Table>

                        <div className="total-price">
                            <hr className="space-break" />
                            <p>Total Price: ${totalPrice}</p>
                        </div>

                        <div className="orderPageBt">
                            <button id="check-out" className="desktop" onClick={() => this.props.checkoutHandler()}>Check Out</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default OrderPage;