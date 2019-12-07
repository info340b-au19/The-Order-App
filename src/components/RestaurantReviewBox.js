import React, { Component } from 'react'; //import React Component
import '../App.css'; //load module-specific CSS
import firebase from 'firebase/app';
//A form the user can use to post a Chirp
export default class RestaurantReviewBox extends Component {
	constructor(props) {
		super(props);
		this.state = { post: '' };
	}

	//when the text in the form changes
	updatePost = (event) => {
		this.setState({ post: event.target.value });
	}

	//post a new review to the database
	postReview = (event) => {
		event.preventDefault(); //don't submit

		/* add a new review to the database */
		let newReview = {
			text: this.state.post,
			userId: this.props.currentUser.uid,
			userName: this.props.currentUser.displayName,
			userPhoto: this.props.currentUser.photoURL,
			time: firebase.database.ServerValue.TIMESTAMP
		};

		firebase.database().ref("reviews").push(newReview);

		this.setState({ post: '' }); //empty out post for next time
	}

	render() {

		return (
			<div className="container">
				<div className="row py-3 input-group">
					<textarea name="text" className="form-control mb-2" placeholder="Write a review..."
						value={this.state.post}
						onChange={this.updatePost}
					/>

					{/* Only show this if the post length is > 140 */}
					{this.state.post.length > 140 &&
						<small className="form-text">140 character limit!</small>
					}

					<div className="ml-3 mt-4">
						{/* Disable if invalid post length */}
						<button className="btn btn-primary"
							disabled={this.state.post.length === 0 || this.state.post.length > 140}
							onClick={this.postReview}
						>
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i> Post
                </button>
					</div>
				</div>
			</div>
		);
	}
}
