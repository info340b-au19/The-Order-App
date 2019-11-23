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
                else { restaurantContent = <MenuPage orderHandler={this.props.orderHandler} success={this.props.success} successIndex={this.props.successIndex} />; }
            }
        });

        return (
            <div className="container">
                <p style={{fontWeight: "600", fontSize: "50px"}}>McDonalds <span style={{fontSize: "20px"}}>($$)</span></p>
                <p style={{fontWeight: "600", fontSize: "20px"}}>(4.5)<FontAwesomeIcon icon={faStar} className="checked" /> based on 1000 reviews</p>
                <input type="text" style={{width: "310px"}} className="form-control mt-2 ml-3 mr-2" placeholder="Write a review... " />
                <RestaurantNav {...this.state} navClickHandler={this.navClickHandler.bind(this)} />

                {/* <MenuPage /> */}
                {restaurantContent}

            </div>

        );
    }
}

export default RestaurantPage;