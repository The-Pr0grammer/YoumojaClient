import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/Login.js";
import Home from "./src/components/Home.js";
import Review from "./src/components/Review.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from "./src/reducers/counter.js";
import isLoggedReducer from "./src/reducers/isLogged.js";

const store = createStore(isLoggedReducer);

function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={navigation.openDrawer} title="Open navigation drawer" />
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<Drawer.Navigator initialRouteName="Login">
						<Drawer.Screen name="Home" component={Home} />
						<Drawer.Screen
							name="Review"
							component={Review}
						/>
						<Drawer.Screen name="Logout" component={Login} />
					</Drawer.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
