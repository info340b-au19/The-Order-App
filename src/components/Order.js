import React, { Component } from 'react';

import "../App.css";
import { Table } from 'reactstrap';

class OrderPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let orderedDishes = this.props.orderedDishes;

        if (orderedDishes.length == 0) {
            return (
                <div id="myorder" class="content container">
                    <div class="card orderCard">
                        <p class="noItemAlert">No item in you cart.</p>
                    </div>
                </div>
            );

        } else {

            let orderedDishesLines = orderedDishes.map((dish) => {
                return (
                    <tr>
                        <td>{dish.info.foodName}</td>
                        <td>1</td>
                        <td>{dish.info.price}</td>
                    </tr>);
            })
            let totalPrice = 0;
            orderedDishes.map((dish) => {
                totalPrice += parseFloat(dish.info.price);
            })

            return (
                <div id="myorder" class="content container">
                    <div class="card orderCard">

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

                        <div class="total-price">
                            <hr class="space-break" />
                            <p>Total Price: {totalPrice}</p>
                        </div>

                        <div class="orderPageBt">
                            <button id="check-out" class="desktop" onClick={() => this.props.checkoutHandler()}>Check Out</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default OrderPage;