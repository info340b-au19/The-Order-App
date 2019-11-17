'use strict'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewStar from "./ReviewStar";
import "../App.css";
import "./components.css";

class RestaurantContent extends Component {
    render() {
        return (
            <div id="restaurants" class="content">
                <div class="flexcontainer">
                    <h2>Restaurants around your Location</h2>
                    <Row>
                        <Col sm="12" lg="6">
                        <Card id="mcd" bsClass="home-card">
                            <img src={"../img/mcd-home.jpeg"} alt="restaurant" class="home-img img-fluid" />
                            <div class="home-info">
                                <h3>McDonalds</h3>
                                <p class="extra-info">Wait-time: 5-10 mins</p>
                                <ReviewStar/>
                                <span class="extra-info">Delivery: Available</span>
                            </div>
                        </Card>
                        </Col>
                        <Col sm="12" lg="6">
                        <Card class="home-card closed-overlay">
                            <img src={"../../img/bokabok-home.jpg"} alt="restaurant" class="home-img img-fluid" />
                            <div class="home-info">
                                <h3>Bok a Bok Chicken</h3>
                                <p class="extra-info">Wait-time: 17-24 mins</p>
                                <ReviewStar/>
                                    <span class="extra-info">Delivery: Unavailable</span>
                            </div>
                            <div class="closed">
                                <div class="closed-text">UNAVAILABLE</div>
                            </div>
                        </Card>
                        </Col>
                    </Row>
                    <a href="#" class="expand">expand</a>
                    <hr class="space-break" />
                </div>
            </div>
        )
    }
}

export default RestaurantContent;
