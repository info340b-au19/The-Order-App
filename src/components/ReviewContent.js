'use strict'

import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewStar  from "./ReviewStar";
import "../App.css";
import reviews from "../review.json";

class ReviewContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review : reviews
        };
    }

    render() {
        return(
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

            <div id="overlay" className="hidden">
                <div id="review">
                    <div>
                        <img src="img/placeholder.png" alt="placeholder" id="review-image" />
                        <button className="back pull-right">RIGHT</button>
                        <div id="review-rating" aria-hidden="true">
                            <span className="heading">User Rating</span>
                            <ReviewStar star={4} />
                        </div>

                        <p id="review-name">NAME</p>
                        <p id="review-price">PRICE</p>
                        <p id="review-description">REVIEW AVERAGE</p>
                        <div id="review-mobile-quantity">
                            <button id="mobile-quantity-sub" className="quantity-setter sub">-</button>
                            <input id="mobile-quantity" type="text" value="1" />
                            <button id="mobile-quantity-add" className="quantity-setter">+</button>
                        </div>
                        <button id="mobile-quantity-addBtn" className="mobile-order">Order</button>
                        <div id="mobile-message" className="order-center alert alert-success hidden"><strong>SUCCESS!</strong></div>
                    </div>

                    <hr className="break" />


                    <div className="review-row">
                        <div className="rate" aria-hidden="true">
                            <div>5 <span className="fa fa-star checked"></span></div>
                            <div className="bar">
                                <div className="bar-5"></div>
                            </div>
                        </div>
                        <div className="rate" aria-hidden="true">
                            <div>4 <span className="fa fa-star checked"></span></div>
                            <div className="bar">
                                <div className="bar-4"></div>
                            </div>
                        </div>
                        <div className="rate" aria-hidden="true">
                            <div>3 <span className="fa fa-star checked"></span></div>
                            <div className="bar">
                                <div className="bar-3"></div>
                            </div>
                        </div>
                        <div className="rate" aria-hidden="true">
                            <div>2 <span className="fa fa-star checked"></span></div>
                            <div className="bar">
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        <div className="rate" aria-hidden="true">
                            <div>1 <span className="fa fa-star checked"></span></div>
                            <div className="bar">
                                <div className="bar-1"></div>
                            </div>
                        </div>

                        <hr className="break" />

                        <div id="review-review">

                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default ReviewContent;