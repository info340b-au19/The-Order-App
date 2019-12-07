import React, { Component } from 'react';
import ReviewStar from "./ReviewStar.js";
import "../App.css";
import ReviewRow from "./ReviewRow.js";

class ReviewContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: this.props.dishes
        };
    }

    // Creates the review rows with the JSON file
    reviewRows = () => {
        let reviews = this.state.dishes[this.props.index].review;
        let reviewRows = reviews.map((element) => {
            return (
                <>
                    <ReviewRow review={element} />
                    <hr className="break" />
                </>);
        })

        return reviewRows;
    }

    render() {
        let dish = this.state.dishes[this.props.index];

        // CSS FOR REVIEW BARS (ONLY ONE NECESSARY FOR INLINE BECAUSE OF DIFFERENT VALUES FROM JSON)
        // Not possible to put into css!
        let bar5 = {
            width: dish.info.ratings.fivestar + "%",
            height: "18px",
            backgroundColor: "#ff6961"
        }

        let bar4 = {
            width: dish.info.ratings.fourstar + "%",
            height: "18px",
            backgroundColor: "#778ecb"
        }

        let bar3 = {
            width: dish.info.ratings.threestar + "%",
            height: "18px",
            backgroundColor: "#ffb347"
        }

        let bar2 = {
            width: dish.info.ratings.twostar + "%",
            height: "18px",
            backgroundColor: "#add8e6"
        }

        let bar1 = {
            width: dish.info.ratings.onestar + "%",
            height: "18px",
            backgroundColor: "#77dd77"
        }

        return (
            <>
                <div id="overlay">
                    <div id="review">
                        <div>
                            <img src={"img/" + dish.info.src} alt={dish.info.alt} id="reviewImage" />
                            <button className="back" onClick={this.props.back.bind(this)}>BACK</button>
                            <p></p>
                            <p id="reviewName">{dish.info.foodName}</p>
                            <p id="review-price">{"($" + dish.info.price + ")"}</p>
                            <div id="review-rating" aria-hidden="true">
                                <span className="heading">User Rating</span>
                                <ReviewStar number={4} />
                            </div>
                            <p id="review-description">{dish.info.averageRating + " average based on " + dish.info.ratingCount + " reviews."}</p>
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