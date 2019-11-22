import React, { Component } from 'react';
import { Card, Row, Col } from "reactstrap";
import ReviewStar from "./ReviewStar.js";
import "../App.css";
import { NavLink } from 'react-router-dom';
import restaurants from "../restaurants.json";
import ClosedRestaurant from "./ClosedRestaurant.js";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: restaurants
        };
    }

    render() {
        return (
            <div id="restaurants" className="container content">
                <div className="flexcontainer">
                    <h2>Restaurants around your Location</h2>
                    <Row>
                        {/* ONLY WORKING HOME CARD */}
                        <Col sm="12" lg="6">
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }} >
                                <Card id="mcd" className="homeCard" onClick={() => this.props.changeCurrent(1)}>
                                    <img src="img/mcdHome.jpeg" alt="restaurant" className="homeImg imgFluid" />
                                    <div className="homeInfo">
                                        <h3>McDonalds</h3>
                                        <p className="extraInfo">Delivery: Available</p>
                                        <p className="extraInfo">Wait-time: 5-10 mins</p>
                                        <ReviewStar number={4} />
                                    </div>
                                </Card>
                            </NavLink>
                        </Col>
                        <ClosedRestaurant info={this.state.restaurant[0]} />
                    </Row>
                    <button className="expand">expand</button>
                    <hr className="spaceBreak" />
                </div>

                <div className="flexcontainer">
                    <h2>New Restaurants to Try</h2>
                    <Row>
                        <ClosedRestaurant info={this.state.restaurant[1]} />
                        <ClosedRestaurant info={this.state.restaurant[2]} />
                    </Row>
                    <button className="expand">expand</button>
                    <hr className="spaceBreak" />
                </div>

                <div className="flexcontainer">
                    <h2>Go Back to the Classics</h2>
                    <Row>
                        <ClosedRestaurant info={this.state.restaurant[3]} />
                        <ClosedRestaurant info={this.state.restaurant[4]} />
                    </Row>
                    <button className="expand">expand</button>
                    <hr className="spaceBreak" />
                </div>
            </div>
        );
    }
}

export default HomePage;
