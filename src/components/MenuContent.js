import React, { Component } from 'react';
import { CardDeck } from "reactstrap";
import "../App.css";
import ReviewContent from "./ReviewContent.js";
import DishCard from "./Dish.js";
import OrderContent from "./OrderContent.js";
import DISHES from "../menu.json";


class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            reviewState: false,
            reviewIndex: 0,
            orderState: false
        };
    }

    // Function opens review page
    toggleReview = (index) => {
        this.setState({
            reviewState: true,
            reviewIndex: index
        });
    }

    // Function opens order quantity page
    toggleOrder = () => {
        this.setState({
            orderState: !this.state.orderState
        })
    }

    // Function closes review page
    back = () => {
        this.setState({
            reviewState: false,
            reviewIndex: 0
        });
    }

    // Function for the review page state
    review = () => {
        if (this.state.reviewState) {
            return <ReviewContent dishes={this.state.dishes} index={this.state.reviewIndex} back={this.back} />
        }
    }

    // Function for the order page state
    order = () => {
        if (this.state.orderState) {
            return <OrderContent toggleOrder={this.toggleOrder} />
        }
    }

    
    render() {
        let dishCards = this.state.dishes.map((dish) => {
            return <DishCard key={dish.info.foodName+"card"} dish={dish} toggleReview={this.toggleReview} back={this.back} orderHandler={this.props.orderHandler} success={this.props.success} successIndex={this.props.successIndex} />;
        })
        
        return (
            <>
                <div id="menu" className="content">
                    <div className="flexcontainer">
                        <CardDeck>
                            {dishCards}
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