import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Modal,
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
			successTogg: false,
			expandTogg: false,
		};
	}

	// renderComments = (props) => {
	// 	return props.comments.map((comment) => (
	// 		<Comment key={comment.id} comment={comment} />
	// 	));
	// };

	handleCancel = () => {
		this.setState({ newCommentTogg: false });
	};

	handleSuccess = () => {
		setTimeout(() => {
			this.setState({ successTogg: true });
		}, 1000);
	};

	handleClose = () => {
		setTimeout(() => {
			this.setState({ successTogg: false });
		}, 3000);
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

				<TouchableOpacity
					style={{
						position: "absolute",
						alignSelf: "flex-end",
						height: vh(37),
						width: vw(12),
						marginTop: vh(0.5),
					}}
					onPress={() => {
						this.setState({ newCommentTogg: true });
					}}
				>
					<Icon
						name="arrows-expand"
						type="foundation"
						color="aqua"
						size={30}
						style={styles.add}
					/>
				</TouchableOpacity>
				<View>
					{this.state.newCommentTogg && (
						<NewComment
							bizId={this.props.bizId}
							handleCancel={this.handleCancel}
							handleSuccess={this.handleSuccess}
							handleClose={this.handleClose}
						/>
					)}
				</View>
				{this.state.successTogg && (
					<Modal
						style={{
							height: 100,
							position: "relative",
							backgroundColor: "purple",
							flex: 1,
						}}
						animationType="fade"
						transparent={true}
						visible={true}
						onRequestClose={() => {
							Alert.alert("Modal has been closed.");
						}}
					>
						<View style={{ backgroundColor: "orange", marginTop: vh(60) }}>
							<Text
								style={{
									fontSize: 22,
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Your Comment Was Posted✅
							</Text>
						</View>
					</Modal>
				)}
				<FlatList
					// contentContainerStyle={{ height: 1000 }}
					// style={{ height: 100, flexGrow: 1 }}
					style={{ marginTop: vh(0.5) }}
					data={this.props.comments}
					renderItem={({ item }) => <Comment comment={item} />}
					keyExtractor={(item) => item.id}
					extraData={this.state}
				/>
			</View>
		);
	}
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
		paddingBottom: vh(54.4), //THIS FIXED THE NOT SCROLLING TO BOTTOM ISSUE AFTER A DAY OF DEBUGGING
	},
	add: {
		// backgroundColor: "pink",
	},
});
