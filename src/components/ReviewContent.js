import React, { Component } from 'react';
import ReviewStar from "./ReviewStar";
import "../App.css";
import reviews from "../review.json";
import ReviewRow from "./ReviewRow";

class ReviewContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: reviews
        };
    }

    reviewRows = () => {
        var rows = this.state.review[this.props.index].review;
        var reviewRows = rows.map((element) => {
            return (
                <>
                    <ReviewRow info={element} />
                    <hr className="break" />
                </>);
        })

        return reviewRows;
    }

    render() {
        var info = this.state.review[this.props.index];

        // CSS FOR REVIEW BARS
        let bar5 = {
            width: info.info.ratings.fivestar + "%",
            height: "18px",
            backgroundColor: "#ff6961"
        }

        let bar4 = {
            width: info.info.ratings.fourstar + "%",
            height: "18px",
            backgroundColor: "#778ecb"
        }

        let bar3 = {
            width: info.info.ratings.threestar + "%",
            height: "18px",
            backgroundColor: "#ffb347"
        }

        let bar2 = {
            width: info.info.ratings.twostar + "%",
            height: "18px",
            backgroundColor: "#add8e6"
        }

        let bar1 = {
            width: info.info.ratings.onestar + "%",
            height: "18px",
            backgroundColor: "#77dd77"
        }

        return (
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

                <div id="overlay">
                    <div id="review">
                        <div>
                            <img src={"img/" + info.info.src} alt={info.info.alt} id="reviewImage" />
                            <button className="back" onClick={this.props.back.bind(this)}>BACK</button>
                            <p id="reviewName">{info.info.foodName}</p>
                            <p id="review-price">{"($" + info.info.price + ")"}</p>
                            <div id="review-rating" aria-hidden="true">
                                <span className="heading">User Rating</span>
                                <ReviewStar number={4} />
                            </div>
                            <p id="review-description">{info.info.averageRating + " average based on " + info.info.ratingCount + " reviews."}</p>
                            <div id="review-mobile-quantity">
                                <button id="mobile-quantity-sub" className="quantity-setter sub">-</button>
                                <input id="mobile-quantity" type="text" value="1" />
                                <button id="mobile-quantity-add" className="quantity-setter">+</button>
                            </div>
                            <button id="mobile-quantity-addBtn" className="mobileOrder">Order</button>
                            <div id="mobile-message" className="order-center alert alert-success hidden"><strong>SUCCESS!</strong></div>
                        </div>

                        <hr className="break" />


                        <div className="reviewRow">
                            <div className="rate" aria-hidden="true">
                                <div>5 <span className="fa fa-star checked"></span></div>
                                <div className="bar">
                                    <div style={bar5}></div>
                                </div>
                            </div>
                            <div className="rate" aria-hidden="true">
                                <div>4 <span className="fa fa-star checked"></span></div>
                                <div className="bar">
                                    <div style={bar4}></div>
                                </div>
                            </div>
                            <div className="rate" aria-hidden="true">
                                <div>3 <span className="fa fa-star checked"></span></div>
                                <div className="bar">
                                    <div style={bar3}></div>
                                </div>
                            </div>
                            <div className="rate" aria-hidden="true">
                                <div>2 <span className="fa fa-star checked"></span></div>
                                <div className="bar">
                                    <div style={bar2}></div>
                                </div>
                            </div>
                            <div className="rate" aria-hidden="true">
                                <div>1 <span className="fa fa-star checked"></span></div>
                                <div className="bar">
                                    <div style={bar1}></div>
                                </div>
                            </div>

                            <hr className="break" />

                            <div id="review-review">
                                {this.reviewRows()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewContent;