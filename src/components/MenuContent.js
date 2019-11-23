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

    toggleReview = (index) => {
        this.setState({
            reviewState: true,
            reviewIndex: index
        });
    }

    toggleOrder = () => {
        console.log("hello");
        this.setState({
            orderState: !this.state.orderState
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
            return <ReviewContent dishes={this.state.dishes} index={this.state.reviewIndex} back={this.back} />
        }
    }

    order = () => {
        if (this.state.orderState) {
            return <OrderContent toggleOrder={this.toggleOrder} />
        }
    }

    
    render() {
        let dishCards = this.state.dishes.map((dish) => {
            return <DishCard key={dish.info.foodName+"card"} dish={dish} toggleReview={this.toggleReview} back={this.back} orderHandler={this.props.orderHandler}/>;
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