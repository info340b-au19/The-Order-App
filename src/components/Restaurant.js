import React, { Component } from 'react';

import "../App.css";
import RestaurantNav from "./ResraurantNav";
import ServicePage from "./Service.js";
import MenuPage from "./MenuContent";
import QueuePage from "./Queue"

class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [{ id: 0, menu: "Menu", isActive: true }, { id: 1, menu: "Service", isActive: false }, { id: 2, menu: "Queue Up", isActive: false }]
        }
    }

    navClickHandler = e => {
        this.setState(
            {
                menus:
                    this.state.menus.map((m) => {
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
                if (element.id == 0) { restaurantContent = <MenuPage />; }
                else if (element.id == 1) { restaurantContent = <ServicePage />; }
                else { restaurantContent = <QueuePage />; }
            }
        });

        return (
            <div className="container">
                <h1>McDonalds</h1>
                <p>4.5 points based on 1000 reviews</p>
                <p>$$</p>
                <p>Write a Review</p>
                <RestaurantNav {...this.state} navClickHandler={this.navClickHandler.bind(this)} />

                {/* <MenuPage /> */}
                {restaurantContent}



            </div>

        );
    }
}

export default RestaurantPage;