import React, { Component } from 'react';
import { Col, Card, CardDeck } from "reactstrap";
import ReviewStar from "./ReviewStar";
import "../App.css";
import ReviewContent from "./ReviewContent";
import MENU from "../menu.json";


class MenuPage extends Component {
    render() {
        let menu = MENU; //handle if not provided a prop
        let dishCards = menu.map((dish) => {
            return <DishCard key={dish.info.name} dish={dish} />;
        })

        return (

            <div id="menu" className="container">
                <div className="flexcontainer">
                    <CardDeck>
                        {dishCards}
                    </CardDeck>
                </div>
            </div>
        );
    }
}
class DishCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewState: false,
            reviewIndex: 0
        };
    }

    toggleReview = (index) => {
        this.setState({
            reviewState: true,
            reviewIndex: index
        });
    }

    back = () => {
        this.setState({
            reviewState: false,
            reviewIndex: 0
        });
    }

    review = () => {
        if (this.state.reviewState) {
            return <ReviewContent index={this.state.reviewIndex} back={this.back} />
        }
    }
    render() {
        let dish = this.props.dish;
        return (
            <>
                <Col sm="12" md="6" lg="4">
                    <Card id="mobile-0" className="menuCard">
                        <img src={"img/" + dish.info.src} alt={dish.info.alt} className="menuImg imgFluid" />
                        <ReviewStar number={Math.floor(dish.info.averageRating)} />
                        <p className="dishName">{dish.info.foodName}</p>
                        <p className="dishPrice">$<span>{dish.info.price}</span></p>
                        <div>
                            <button className="desktop orderBt">Order</button>
                            <button className="desktop" onClick={() => this.toggleReview(dish.id - 1)} >Reviews</button>
                        </div>
                    </ Card>
                </ Col>
                <div>
                    {this.review()}
                </div>
            </>
        );
    }

}


export default MenuPage;