import React, { Component } from 'react';

import "../App.css";


class RestaurantNav extends Component {
    

    render() {
        return (
            <div id="restaurant-nav">
                <nav id="restaurant" className="topnav">
                    {
                        this.props.menus.map(menu =>
                            <a key={menu.menu}
                                className={menu.isActive ? 'active' : ''}
                                id={menu.id}
                                onClick={this.props.navClickHandler}
                            >
                                {menu.menu}
                            </a>
                        )
                    }
                </nav>
            </div>
        )
    }
}

export default RestaurantNav;