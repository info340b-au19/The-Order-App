import React, { Component } from 'react'; //import React Component
import Moment from 'react-moment';
import '../App.css'; //load module-specific CSS
import firebase from 'firebase/app';
//A list of reviews that have been posted
export default class RestaurantReviewList extends Component {
	constructor(props) {
		super(props);
		this.state = { reviews: [] };
	}
	componentDidMount() {
		this.reviewsRef = firebase.database().ref("reviews");
		this.reviewsRef.on('value', (snapshot) => {
			this.setState({ reviews: snapshot.val() });
		})
	}

	componentWillUnmount() {
		this.reviewsRef.off();
	}
	render() {
		if (!this.state.reviews) return null; //if no reviews, don't display

		let reviewKeys = Object.keys(this.state.reviews);
		let items = reviewKeys.map((key) => {
			let reviewObj = this.state.reviews[key];
			reviewObj.id = key;
			return reviewObj;
		})
		let reviewItems = items.map((element) => {
			return <ReviewItem key={element.id} review={element} id={element.id} currentUser={this.props.currentUser} />
		})  

		return (
			<div id="overlay">
				<div id="review">
					<div className="container">
					<button className="back" onClick={this.props.back.bind(this)}>BACK</button>
						{reviewItems}
					</div>
				</div>
			</div>);
	}
}

//A single review
class ReviewItem extends Component {
	render() {
		let review = this.props.review; //current review (convenience)

		return (
			<div className="row py-4 bg-white border">
				<div className="col-2">
					<img className="avatar" src={review.userPhoto} alt={review.userName + ' avatar'} />
				</div>
				<div className="col">

					<span className="handle">{review.userName} {/*space*/}</span>

					<span className="time"><Moment date={review.time} fromNow /></span>

					<div className="review">{review.text}</div>
					
				</div>
			</div>
		);
	}
}
