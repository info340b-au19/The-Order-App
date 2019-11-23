import React, { Component } from 'react';

import "../App.css";
import RestaurantNav from "./RestaurantNav";
import ServicePage from "./Service.js";
import MenuPage from "./MenuContent";
import QueuePage from "./Queue"
import ReviewStar from "./ReviewStar"

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

    navClickHandler = e => {
        this.setState(
            {
                menus:
                    this.state.menus.map((m) => {
                        // eslint-disable-next-line
                        m.isActive = (e.target.id == m.id);
                        return m;
                    })
            }
        );
    }

    render() {
        let restaurantContent = ''
        this.state.menus.forEach((element) => {
            if (element.isActive) {
                // eslint-disable-next-line
                if (element.id == 0) { restaurantContent = <QueuePage />; }
                // eslint-disable-next-line
                else if (element.id == 1) { restaurantContent = <ServicePage />; }
                else { restaurantContent = <MenuPage orderHandler={this.props.orderHandler}/>; }
            }
        });

        return (
            <div className="container">
                <h1>McDonalds</h1>
                <ReviewStar number={4} /><span>4.5 points based on 1000 reviews  </span>
                <span>$$</span>
                <p>Write a Review</p>
                <RestaurantNav {...this.state} navClickHandler={this.navClickHandler.bind(this)} />

                {/* <MenuPage /> */}
                {restaurantContent}

            </div>

        );
    }
}

export default RestaurantPage;