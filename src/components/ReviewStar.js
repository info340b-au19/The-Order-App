import React, { Component } from 'react';
import "../App.css";
import "./components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class ReviewStar extends Component {
    render() {
        return (
            <div class="star" aria-label="4 out of 5" aria-hidden="true">
                <span>(4)</span>
                <FontAwesomeIcon icon={faStar} class="checked" />
                <FontAwesomeIcon icon={faStar} class="checked" />
                <FontAwesomeIcon icon={faStar} class="checked" />
                <FontAwesomeIcon icon={faStar} class="checked" />
                <FontAwesomeIcon icon={faStar} class="unchecked"/>
            </div>
        )
    }
}

export default ReviewStar;