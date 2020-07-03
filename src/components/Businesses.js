import React, { Component } from "react";
import {
	ScrollView,
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	ImageBackground,
} from "react-native";
import { Card, SearchBar } from "react-native-elements";
import axios from "axios";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import TextTicker from "react-native-text-ticker";
class Businesses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesesses: [],
			page: 1,
			error: null,
			search: "",
		};
	}
	fetchUsers = () => {
		const { page } = this.state;
		axios
			.get(`https://api.github.com/users?since=${page}&per_page=10`)
			.then((response) => {
				this.setState({
					businesesses: this.state.businesesses.concat(response.data),
				});
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	};

	componentDidMount() {
		this.fetchUsers(this.state.page);
	}

	updateSearch = (search) => {
		this.setState({ search });
	};

	render() {
		return (
			<View
				style={{
					width: "100%",
					height: "100%",
					flex: 1,
					backgroundColor: "black",
				}}
			>
				<View style={styles.searchDiv}>
					<SearchBar
						round
						searchIcon={{ size: 24 }}
						onChangeText={() => this.updateSearch}
						placeholder="Type Here..."
						value={this.state.search}
						inputContainerStyle={{ borderRadius: 16, backgroundColor: "green" }}
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
					data={this.state.businesesses}
					keyExtractor={(biz) => biz.id.toString()}
					renderItem={({ item }) => (
						<View style={styles.cardView}>
							<Card
								containerStyle={{
									width: vw(65),
									padding: 0,
									borderWidth: 0,
									shadowColor: "rgba(0,0,0, 0.0)",
									shadowOffset: { height: 0, width: 0 },
									shadowOpacity: 0,
									shadowRadius: 0,
									elevation: 0,
									backgroundColor: "transparent",
								}}
							>
								<Image
									style={styles.img}
									source={require("../images/30minneapolis-videoSixteenByNine3000-scaled.jpg")}
								/>
							</Card>
							<View styles={{ width: vw(100), backgroundColor: "red" }}>
								{/* <TextTicker
									duration={Math.random * 40000}
									loop
									bounce
									repeatSpacer={0}
									marqueeDelay={Math.random() * 2000}
									style={styles.cardText}
								>
									made random text cos this is just an example of a businesses
									description !!!!!!! yeeeeeeeeeeee 🔥🤯♥️
								</TextTicker> */}
							</View>
						</View>
					)}
				/>
			</View>
		);
	}
}

export default Businesses;

const styles = StyleSheet.create({
	bg: {
		// flex:1,
		resizeMode: "cover",
		opacity: 0.2,
		padding: 0,
		borderWidth: 0,
		width: "100%",
		height: "100%",
	},
	list: {
		alignSelf: "auto",
		marginTop: "40%",
		position: "absolute",
		opacity: 1.0,
		height: "80%",
		width: "100%",
	},
	cardView: {
		marginTop: vh(-0.5),
		padding: 0,
	},
	img: {
		marginLeft: vh(-1.7),
		width: undefined,
		height: vh(30),
		opacity: 1.0,
		borderRadius: 6,
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
		height: "10%",
		paddingBottom: vh(4),
		position: "absolute",
		bottom: "79.5%",
		flexDirection: "column-reverse",
	},
});
