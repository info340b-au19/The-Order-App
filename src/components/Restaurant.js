import React, { Component } from 'react';

import "../App.css";
import RestaurantNav from "./RestaurantNav";
import ServicePage from "./Service.js";
import MenuPage from "./MenuContent";
import QueuePage from "./Queue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RestaurantReviewBox from "./RestaurantReviewBox";
import RestaurantReviewList from "./RestaurantReviewList";
import {Button} from "reactstrap";

class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewState: false,
            menus: [
                { id: 0, menu: "Queue Up", isActive: true },
                { id: 1, menu: "Service", isActive: false },
                { id: 2, menu: "Menu", isActive: false }
            ]
        }
    }

    // Function helper for the navigation
    navClickHandler = (element) => {
        this.setState(
            {
                menus:
                    this.state.menus.map((menu) => {
                        // eslint-disable-next-line
                        menu.isActive = (element.target.id == menu.id);
                        return menu;
                    })
            }
        );
    }


    // Function opens review page
    toggleReview = () => {
        this.setState({
            reviewState: true,
        });
    }


    // Function closes review page
    back = () => {
        this.setState({
            reviewState: false,
        });
    }

    // Function for the review page state
    review = () => {
        if (this.state.reviewState) {
            return <RestaurantReviewList currentUser={this.props.user} back={this.back}/>
        }
    }

    render() {
        let restaurantContent = ''
        this.state.menus.forEach((element) => {
            if (element.isActive) {
                // eslint-disable-next-line
                if (element.id === 0) { restaurantContent = <QueuePage />; }
                // eslint-disable-next-line
                else if (element.id == 1) { restaurantContent = <ServicePage />; }
                else { restaurantContent = <MenuPage orderHandler={this.props.orderHandler} success={this.props.success} successIndex={this.props.successIndex} />; }
            }
        });
        if (this.props.loading) {
            return (<div className="text-center">
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>);
        } else {
            return (
                <div className="container">
                    <div className="restaurant-header" id="headerStyle">
                        <div className="restBackground">
                            <p id="nameStyle">McDonalds <span id="priceRangeStyle">($$)</span></p>
                            <div id="infoStyle">
                                <span>(4.5)<FontAwesomeIcon icon={faStar} className="checked" /></span> 
                                <span > based on 1000 reviews</span>
                                <Button className="ml-3" onClick={() => this.toggleReview()}>See all reviews</Button>
                                {this.review()}
                                </div>
                            <RestaurantReviewBox currentUser={this.props.user} />
                        </div>
                    </div>
                    <RestaurantNav {...this.state} navClickHandler={this.navClickHandler.bind(this)} />

                    {restaurantContent}

                </div>

            );
        }
    }
}

export default RestaurantPage;