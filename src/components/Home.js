import * as React from "react";
import { View, StyleSheet, ImageBackground, TextInput } from "react-native";
import {
	Input,
	ThemeProvider,
	Button,
	Icon,
	Text,
} from "react-native-elements";
import { Dimensions } from "react-native";
import Image from "react-native-scalable-image";

function Home({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={navigation.openDrawer} title="Open navigation drawer" />
			<Button
				onPress={() => navigation.navigate("Notifications")}
				title="Go to notifications"
			/>
		</View>
	);
}

export default Home;
