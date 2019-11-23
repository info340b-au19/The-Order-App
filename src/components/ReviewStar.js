import React, { Component } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class ReviewStar extends Component {
    createStars = (index, number) => {
        if(index < number) {
            return <FontAwesomeIcon icon={faStar} className="checked" />
        } else {
            return <FontAwesomeIcon icon={faStar} className="unchecked" />
        }
    }

    render() {
        let number = this.props.number;
        return (
            <div className="star" aria-label={number + " out of 5"} aria-hidden="false">
            {/* <span className="starNumber">{"(" + number + ")"}</span> */}
            {this.createStars(0, number)}
            {this.createStars(1, number)}
            {this.createStars(2, number)}
            {this.createStars(3, number)}
            {this.createStars(4, number)}
            </div>
        )
    }
}

export default ReviewStar;