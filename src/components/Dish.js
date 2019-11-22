import React, { Component } from 'react';
import "../App.css";
import ReviewStar from "./ReviewStar.js";
import { Card, Col } from "reactstrap";

class Dish extends Component {
    render() {
        let data = this.props.info.info;
        return (
            <>
                <Col sm="12" md="6" lg="4">
                    <Card id="mobile-0" className="menuCard">
                        <img src={"img/" + data.src} alt={data.alt} className="menuImg imgFluid" />
                        <ReviewStar number={3} />
                        <p className="dishName">{data.foodName}</p>
                        <p className="dishPrice">$<span>{data.price}</span></p>
                        <div>
                            <button className="desktop orderBt" onClick={() => this.props.toggleOrder()} >Order</button>
                            <button className="desktop" onClick={() => this.props.toggleReview(this.props.index)} >Reviews</button>
                        </div>
                    </ Card>
                </ Col>
            </>
        );
    }
}

export default Dish;