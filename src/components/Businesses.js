import React, { Component } from "react";
import {
	ScrollView,
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Card, SearchBar, Icon } from "react-native-elements";
import axios from "axios";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
import ListBiz from "./ListBiz.js";

class Businesses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses: [],
			userLikes: [],
			page: 1,
			error: null,
			search: "",
		};
	}

	componentDidMount() {
		this.fetchBizs(this.state.page);
		this.fetchLikes();
	}

	fetchBizs = () => {
		const { page } = this.state;
		axios
			.get(`http://localhost:3000/user_bizs`)

			.then((response) => {
				this.setState({
					businesses: response.data.filter((biz) =>
						biz.business.name.includes(this.state.search)
					),
				});
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	};

	fetchLikes = () => {
		axios
			.get(`http://localhost:3000/users/1`)

			.then((response) => {
				this.setState({ userLikes: response.data.user_likes });
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	};

	updateSearch = (e) => {
		return this.setState({ search: e });
	};

	render() {
		return (
			<View
				style={{
					width: "100%",
					height: "100%",
					flex: 1,
					backgroundColor: "black",
					justifyContent: "center",
				}}
			>
				<View style={styles.searchDiv}>
					<SearchBar
						round
						searchIcon={{ size: 24 }}
						onChangeText={this.updateSearch}
						onSubmitEditing={(e) => this.fetchBizs(this.state.page)}
						placeholder={"Search by keyword, city/state or zip"}
						value={this.state.search}
						inputContainerStyle={{ borderRadius: 16, backgroundColor: "black" }}
					/>
				</View>
				<ImageBackground
					source={require("../images/Jarrell-Wadsworth-Revolutionary-Print-Lusenhop-Tate-Loan-Tiff.jpg")}
					style={styles.bg}
				></ImageBackground>

				<FlatList
					style={styles.list}
					contentContainerStyle={{
						backgroundColor: "rgba(0, 0, 0, 0)",
						alignItems: "left",
						justifyContent: "left",
					}}
					data={this.state.businesses}
					keyExtractor={(biz) => biz.id.toString()}
					renderItem={({ item }) => (
						<ListBiz biz={item} navigation={this.props.navigation} />
					)}
				/>
			</View>
		);
	}
}

export default connect(mapStateToProps)(Businesses);

const styles = StyleSheet.create({
	bg: {
		resizeMode: "cover",
		opacity: 0.3,
		padding: 0,
		borderWidth: 0,
		width: "100%",
		height: "110%",
	},
	list: {
		// alignSelf: "auto",
		marginTop: "40%",
		position: "absolute",
		opacity: 1.0,
		height: "80%",
		width: "100%",
		top: vh(2),
	},
	cardText: {
		width: vw(100),
		height: vh(5),
		backgroundColor: "gray",
		opacity: 0.85,
		padding: 0,
		textAlign: "center",
		fontSize: vh(3),
	},
	searchDiv: {
		zIndex: 1,
		opacity: 1.0,
		width: "90%",
		paddingBottom: vh(4),
		position: "relative",
		top: "15%",
		alignSelf: "center",
	},
});

function mapStateToProps(state) {
	return { isLogged: state.isLogged };
}
