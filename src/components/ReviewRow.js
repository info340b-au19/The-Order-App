import React, { Component } from 'react';
import "../App.css";
import ReviewStar from "./ReviewStar.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ReviewRow extends Component {
    render() {
        let data = this.props.info;
        return (
            <>
                <Row>
                    <Col lg="12">
                        <div className="review-row">
                            <div className="side">
                                <div>
                                    <img src={"img/" + data.picture} alt="profile picture" className="profile" />
                                    <p className="name"></p>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="mobile-head">
                                    <img src={"img/" + data.picture} alt="profile picture" className="mobile-profile" />
                                    <p className="mobile-name">{data.name}</p>
                                    <ReviewStar number={data.rating} />
                                </div>
                                <p className="review-section">{data.review}</p>
                            </div>
                            <div className="side right">
                                <div className="review-desktop-stars">
                                    <ReviewStar number={data.rating} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default ReviewRow;