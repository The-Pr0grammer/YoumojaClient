import * as React from "react";
import ReviewModal from "react-native-review-modal";
import { LinearGradient } from "expo";

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 0,
		};
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating,
		});
	}

	render() {
		return (
			<ReviewModal
				starRating={this.state.starCount}
				onStarRatingPress={(rating) => {
					this.onStarRatingPress(rating);
				}}
			/>
		);
	}
}

export default Review;
