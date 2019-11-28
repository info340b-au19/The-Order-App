import React, { Component } from 'react';
import "../App.css";
import ReviewStar from "./ReviewStar.js";
import { Card, Col } from "reactstrap";


class DishCard extends Component {

    success = () => {
        if (this.props.success && this.props.successIndex === this.props.dish.id - 1) {
            return (
                <div id="message" className="order-center alert alert-success"><strong>SUCCESS!</strong></div>
            );
        }
    }

    render() {
        let dish = this.props.dish;
        return (
                <Col sm="12" md="6" lg="4">
                    <Card id="mobile-0" className="menuCard">
                        <img src={"img/" + dish.info.src} alt={dish.info.alt} className="menuImg imgFluid" />
                        <ReviewStar number={Math.floor(dish.info.averageRating)} />
                        <p className="dishName">{dish.info.foodName}</p>
                        <p className="dishPrice">$<span>{dish.info.price}</span></p>
                        {this.success()}
                        <div>
                            <button className="desktop orderBt" onClick={() => this.props.orderHandler(dish)}>Order</button>
                            <button className="desktop" onClick={() => this.props.toggleReview(dish.id - 1)} >Reviews</button>
                        </div>
                    </ Card>
                </ Col>
        );
    }
}

export default DishCard;