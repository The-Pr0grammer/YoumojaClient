import {
	StyleSheet,
	TextInput,
	View,
	KeyboardAvoidingView,
} from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { vh } from "react-native-expo-viewport-units";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class CommentInput extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	};

	state = {
		text: "",
	};

	handleChangeText = (text) => {
		this.setState({ text });
	};

	handleSubmitEditing = () => {
		const { onSubmit } = this.props;
		const { text } = this.state;

		if (!text) return;

		onSubmit(text);
		this.setState({ text: "" });
	};

	render() {
		const { text } = this.state;

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={text}
					placeholder="Say something 🗣..."
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
					fontSize={20}
					backgroundColor={"silver"}
					textAlign={"center"}
					borderRadius={8}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "rgba(0,0,0,0.1)",
		paddingHorizontal: 10,
		marginTop: vh(1.5),
		marginBottom: vh(0.5),
		height: vh(9),
		position: "relative",
		zIndex: 1,
		backgroundColor: "red"
	},
	input: { height: vh(9) },
});
