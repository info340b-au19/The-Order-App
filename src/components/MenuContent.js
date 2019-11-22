import React, { Component } from 'react';
<<<<<<< HEAD
import {CardDeck } from "reactstrap";
=======
import { Row } from "reactstrap";
>>>>>>> 9667db9012ceb62ca5a1c607c585c20f195b5397
import "../App.css";
import ReviewContent from "./ReviewContent.js";
import Dish from "./Dish.js";
import OrderContent from "./OrderContent.js";
import reviews from "../menu.json";


class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: reviews,
            reviewState: false,
            reviewIndex: 0,
            orderState: false
        };
    }

    toggleReview = (index) => {
        this.setState({
            reviewState: true,
            reviewIndex: index
        });
    }

    toggleOrder = () => {
        this.setState({
            orderState: true
        })
    }

    back = () => {
        this.setState({
            reviewState: false,
            reviewIndex: 0
        });
    }

    review = () => {
        if (this.state.reviewState) {
            return <ReviewContent info={this.state.info} index={this.state.reviewIndex} back={this.back} />
        }
    }

    order = () => {
        if (this.state.orderState) {
            return <OrderContent />
        }
    }
    render() {
        return (
            <>
                <div id="menu" className="content">
                    <div className="flexcontainer">
                    <CardDeck>
                            <Dish info={this.state.info[0]} toggleReview={this.toggleReview} back={this.back} index={0} />
                            <Dish info={this.state.info[1]} toggleReview={this.toggleReview} back={this.back} index={1} />
                            <Dish info={this.state.info[2]} toggleReview={this.toggleReview} back={this.back} index={2} />
                            <Dish info={this.state.info[3]} toggleReview={this.toggleReview} back={this.back} index={3} />
                            <Dish info={this.state.info[4]} toggleReview={this.toggleReview} back={this.back} index={4} />
                            <Dish info={this.state.info[5]} toggleReview={this.toggleReview} back={this.back} index={5} />
                            <Dish info={this.state.info[6]} toggleReview={this.toggleReview} back={this.back} index={6} />
                            <Dish info={this.state.info[7]} toggleReview={this.toggleReview} back={this.back} index={7} />
                            <Dish info={this.state.info[8]} toggleReview={this.toggleReview} back={this.back} index={8} />
                            <Dish info={this.state.info[9]} toggleReview={this.toggleReview} back={this.back} index={9} />
                            <Dish info={this.state.info[10]} toggleReview={this.toggleReview} back={this.back} index={10} />
                            <Dish info={this.state.info[11]} toggleReview={this.toggleReview} back={this.back} index={11} />
                        </CardDeck>
                    </div>
                </div>

                <div>
                    {this.review()}
                </div>

                <div>
                    {this.order()}
                </div>
            </>
        );
    }

}
export default MenuPage;