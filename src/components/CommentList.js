import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Flatlist,
} from "react-native";
import React from "react";
import Comment from "./Comment.js";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import NewComment from "./NewComment.js";
import { SafeAreaView } from "react-native-safe-area-context";

export default class CommentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newCommentTogg: false,
		};
	}

	renderComments = (props) => {
		return props.comments.map((comment) => (
			<Comment key={comment.id} comment={comment} />
		));
	};

	handleCancel = () => {
		this.setState({ newCommentTogg: false });
	};

	render() {
		console.log(this.props);
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
				{this.state.newCommentTogg == false && (
					<TouchableOpacity
						style={{
							position: "relative",
							alignSelf: "center",
							height: 37,
							width: 45,
						}}
						onPress={() => {
							this.setState({ newCommentTogg: true });
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
				)}
				<View>
					{this.state.newCommentTogg && (
						<NewComment
							bizId={this.props.bizId}
							handleCancel={this.handleCancel}
						/>
					)}
				</View>
				<SafeAreaView style={{ flex: 1 }}>
					<ScrollView
						bounces={true}
						decelerationRate={0.09}
						style={{ height: 1000, padding: 1, flex: 1 }}
					>
						{this.renderComments(this.props)}
					</ScrollView>
				</SafeAreaView>
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
		flex: 1,
		width: vw(100),
		height: vh(100),
		marginTop: vh(30),
		backgroundColor: "green",
		flexDirection: "column",
		position: "absolute",
		// paddingBottom: 500,
	},
	add: {
		// backgroundColor: "pink",
	},
});
