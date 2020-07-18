import { Flatlist, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Comment from "./Comment.js";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default class CommentList extends React.Component {
	renderComments = (props) => {
		return props.comments.map((comment) => (
			<Comment key={comment.id} comment={comment} />
		));
	};

	render() {
		console.log(this.props.comments);
		return (
			<ScrollView style={styles.commList}>
				<View>{this.renderComments(this.props)}</View>
			</ScrollView>
		);
	}
}

{
	/* {this.props.comments.map((com) =>
						this.renderItem(com.content, com.id)
					)} */
}

const styles = StyleSheet.create({
	commList: {
		width: vw(100),
        height: vh(53),
        marginTop:vh(37.9),
		backgroundColor: "green",
		position: "absolute",
	},
});
