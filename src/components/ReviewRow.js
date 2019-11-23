import React, { Component } from 'react';
import "../App.css";
import ReviewStar from "./ReviewStar.js";
import {Row, Col} from "reactstrap";

class ReviewRow extends Component {
    render() {
        let review = this.props.review;
        return (
            <>
                <Row>
                    <Col lg="12">
                        <div className="reviewRow">
                            <div className="side">
                                <div>
                                    <img src={"img/" + review.picture} alt="person" className="profile" />
                                    <p className="name"></p>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="mobile-head">
                                    <img src={"img/" + review.picture} alt="person" className="mobile-profile" />
                                    <p className="mobile-name">{review.name}</p>
                                    <ReviewStar number={review.rating} />
                                </div>
                                <p className="review-section">{review.review}</p>
                            </div>
                            <div className="side right">
                                <div className="review-desktop-stars">
                                    <ReviewStar number={review.rating} />
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