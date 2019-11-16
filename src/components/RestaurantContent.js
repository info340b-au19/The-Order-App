import React, { Component } from 'react';
import "../App.css";
import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

class RestaurantContent extends Component {
    render() {
        return (
            <div id="restaurants" class="content">
                <div class="flexcontainer">
                    <h2>Restaurants around your Location</h2>
                    <div>
                        <div id="mcd" class="card home-card col-lg col-sm-4">
                            <img src={"img/mcd-home.jpeg"} alt="restaurant" class="home-img img-fluid" />
                            <div class="home-info">
                                <h3>McDonalds</h3>
                                <p class="extra-info">Wait-time: 5-10 mins</p>
                                <div class="star" aria-label="4 out of 5" aria-hidden="true">
                                    <span>(4)</span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="extra-info">Delivery: Available</span>
                                </div>
                            </div>
                        </div>
                        <div class="card home-card col-lg col-sm-4 closed-overlay">
                            <img src={"img/bokabok-home.jpg"} alt="restaurant" class="home-img img-fluid" />
                            <div class="home-info">
                                <h3>Bok a Bok Chicken</h3>
                                <p class="extra-info">Wait-time: 17-24 mins</p>
                                <div class="star" aria-label="5 out of 5" aria-hidden="true">
                                    <span>(5)</span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="extra-info">Delivery: Unavailable</span>
                                </div>
                            </div>
                            <div class="closed">
                                <div class="closed-text">UNAVAILABLE</div>
                            </div>
                        </div>
                    </ div>
                    <a href="#" class="expand">expand</a>
                    <hr class="space-break" />
                </div>
            </div>
        )
    }
}

export default RestaurantContent;
