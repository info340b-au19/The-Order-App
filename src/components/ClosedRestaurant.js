import React, { Component } from 'react';
import "../App.css";
import ReviewStar from "./ReviewStar.js";
import { Card, Col } from "reactstrap";

class ClosedRestaurant extends Component {
    render() {
        let data = this.props.info;
        return (
            <Col sm="12" lg="6">
                <Card className="homeCard closedOverlay">
                    <img src={"img/" + data.src} alt="restaurant" className="homeImg imgFluid" />
                    <div className="homeInfo">
                        <h3>{data.name}</h3>
                        <p className="extraInfo">{"Delivery: " + data.delivery}</p>
                        <p className="extraInfo">{"Wait-time: " + data.waittime}</p>
                        <ReviewStar number={data.star} />
                    </div>
                    <div className="closed">
                        <div className="closedText">UNAVAILABLE</div>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default ClosedRestaurant;