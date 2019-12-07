import React, { Component } from 'react';

import "../App.css";
import RestaurantNav from "./RestaurantNav";
import ServicePage from "./Service.js";
import MenuPage from "./MenuContent";
import QueuePage from "./Queue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

        return (
            <div className="container">
                <div className="restaurant-header" id="headerStyle">
                    <div className="restBackground">
                        <p id="nameStyle">McDonalds <span id="priceRangeStyle">($$)</span></p>
                        <p id="infoStyle">(4.5)<FontAwesomeIcon icon={faStar} className="checked" /> based on 1000 reviews</p>
                        <input type="text" className="form-control mt-2 ml-3 mr-2 restReview" placeholder="Write a review... " />
                    </div>
                </div>
                <RestaurantNav {...this.state} navClickHandler={this.navClickHandler.bind(this)} />

                {restaurantContent}

            </div>

        );
    }
}

export default RestaurantPage;