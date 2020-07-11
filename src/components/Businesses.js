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
import TextTicker from "react-native-text-ticker";
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
class Businesses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses: [],
			page: 1,
			error: null,
			search: "",
		};
	}

	fetchUsers = () => {
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

	componentDidMount() {
		this.fetchUsers(this.state.page);
	}

	updateSearch = (e) => {
		return this.setState({ search: e });
	};

	render() {
		console.log(this.state.search);
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
						onSubmitEditing={(e) => this.fetchUsers(this.state.page)}
						placeholder={"Looking for something specific?"}
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
						<View style={styles.cardView}>
							<Card
								containerStyle={{
									width: vw(97),
									padding: 0,
									borderWidth: 0,
									shadowOffset: { height: 0, width: 0 },
									display: "flex",
									flexDirection: "column",
									backgroundColor: "transparent",
								}}
							>
								<Image
									style={styles.img}
									source={{ uri: item.business.image_url }}
								/>
								<View
									style={{
										alignSelf: "flex-end",
										left: vw(61.3),
										position: "absolute",
										height: vh(30),
										width: vh(16.5),
										backgroundColor: "black",
										opacity: 0.5,
									}}
								>
									<TouchableOpacity
										style={{
											position: "absolute",
											alignSelf: "center",
											right: vw(12.5),
											top: vw(3.5),
											height: 37,
											width: 45,
										}}
										onPress={() => {}}
									>
										<Icon name="heart" type="feather" color="red" size={37} />
									</TouchableOpacity>
									<Text
										style={{
											position: "absolute",
											textAlign: "center",
											fontSize: 25,
											color: "gold",
											fontWeight: "bold",
											right: vw(12.5),
											top: vh(6),
											height: 37,
											width: 45,
										}}
									>
										1
									</Text>
									{/* COMMENTS ICON */}
									<TouchableOpacity
										style={{
											position: "absolute",
											alignSelf: "center",
											right: vw(12.5),
											top: vh(11),
											height: 37,
											width: 45,
										}}
										onPress={() => {}}
									>
										<Icon
											name="chat"
											type="materialcommunityicons"
											color="green"
											size={37}
										/>
									</TouchableOpacity>

									<Text
										style={{
											position: "absolute",
											textAlign: "center",
											fontSize: 25,
											color: "gold",
											fontWeight: "bold",
											right: vw(12.5),
											top: vh(15),
											height: 37,
											width: 45,
										}}
									>
										1
									</Text>

									<ScrollView
										style={{
											alignSelf: "flex-start",
											backgroundColor: "orange",
											width: vw(34.5),
											height: vh(10),
											position: "absolute",
											top: vh(20),
										}}
										automaticallyAdjustInsets={false}
										horizontal={true}
										pagingEnabled={true}
										scrollEnabled={true}
										decelerationRate={0}
										snapToAlignment={"center"}
										snapToInterval={200}
										scrollEventThrottle={16}
										onScroll={(event) => {
											var contentOffsetX = event.nativeEvent.contentOffset.x;
											var contentOffsetY = event.nativeEvent.contentOffset.y;

											var cellWidth = (DEVICE_WIDTH - 100).toFixed(2);
											var cellHeight = (DEVICE_HEIGHT - 200).toFixed(2);

											var cellIndex = Math.floor(contentOffsetX / cellWidth);

											// Round to the next cell if the scrolling will stop over halfway to the next cell.
											if (
												contentOffsetX -
													Math.floor(contentOffsetX / cellWidth) * cellWidth >
												cellWidth
											) {
												cellIndex++;
											}

											// Adjust stopping point to exact beginning of cell.
											contentOffsetX = cellIndex * cellWidth;
											contentOffsetY = cellIndex * cellHeight;

											event.nativeEvent.contentOffsetX = contentOffsetX;
											event.nativeEvent.contentOffsetY = contentOffsetY;

											// this.setState({contentOffsetX:contentOffsetX,contentOffsetY:contentOffsetY});
											console.log("cellIndex:" + cellIndex);

											console.log("contentOffsetX:" + contentOffsetX);
											// contentOffset={{x:this.state.contentOffsetX,y:0}}
										}}
									>
										<Image
											source={require("../images/LOGO.png")}
											style={styles.image}
										/><Image
										source={require("../images/LOGO.png")}
										style={styles.image}
									/>
									</ScrollView>
								</View>
								{/* BADGES VIEW*/}
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
	cardView: {
		marginTop: vh(-0.5),
		padding: 0,
		display: "flex",
		flexDirection: "row",
	},
	img: {
		flex: 2,
		marginLeft: vh(-1.7),
		width: vw(65),
		height: vh(30),
		opacity: 1.0,
		borderRadius: 2,
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
