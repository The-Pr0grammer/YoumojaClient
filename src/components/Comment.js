import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default class Comment extends React.Component {
	render() {
		return (
			<View style={styles.comment}>
				<Text>{this.props.comment.content}</Text>
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
	comment: {
		marginHorizontal: 10,
		paddingVertical: 20,
		paddingRight: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.05)",
        backgroundColor:"blue"
	},
});
