import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Comment from "./Comment.js";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";

export default class CommentList extends React.Component {
	renderComments = (props) => {
		return props.comments.map((comment) => (
			<Comment key={comment.id} comment={comment} />
		));
	};

	render() {
		// console.log(this.props.comments);
		return (
			<View style={styles.commList}>
				<Text
					style={{
						textAlign: "center",
						fontSize: 20.5,
						fontFamily: "Marker Felt",
						// backgroundColor: "magenta",
						width: vw(50),
						alignSelf: "center",
					}}
				>
					COMMENTS({this.props.comments.length})
				</Text>
				<TouchableOpacity
					style={{
						position: "relative",
						alignSelf: "center",
						height: 37,
						width: 45,
					}}
					onPress={() => {
						this.incHearts();
					}}
				>
					<Icon
						name="plus-circle"
						type="feather"
						color="aqua"
						size={37}
						style={styles.add}
					/>
				</TouchableOpacity>
				<ScrollView>
					<View>{this.renderComments(this.props)}</View>
				</ScrollView>
			</View>
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
		marginTop: vh(30),
		backgroundColor: "green",
		flexDirection: "column",
	},
	add: {
		// backgroundColor: "pink",
	},
});
