import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/Login.js";
import Home from "./src/components/Home.js";
import {Provider} from 'react-redux'
import{createStore} from 'redux'
import counterReducer from './src/reducers/counter.js'

const store = createStore(counterReducer, isLoggedReducer);


function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={navigation.openDrawer} title="Open navigation drawer" />
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Login">
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Notifications" component={NotificationsScreen} />
				<Drawer.Screen name="Logout" component={Login} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
