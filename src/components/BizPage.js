import React, { Component } from "react";
import axios from "axios";
import {
	ScrollView,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Card, SearchBar, Icon } from "react-native-elements";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import TextTicker from "react-native-text-ticker";
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
import CommentList from "./CommentList.js";

class BizPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			loading: false,
			page: 1,
			error: null,
		};
	}

	componentDidMount() {}

	render() {
		return (
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
						source={{ uri: this.props.route.params["biz"].business.image_url }}
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
								top: vh(2.5),
								height: 37,
								width: 45,
							}}
							onPress={() => {
								this.incHearts();
							}}
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
								top: vh(5),
								height: 37,
								width: 45,
							}}
						>
							{this.state.hearts}
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
							{this.props.route.params["biz"].business.comments.length}
						</Text>
					</View>
					{/* BADGES VIEW*/}
				</Card>

				<ScrollView
					contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
					style={{
						alignSelf: "flex-start",
						backgroundColor: "black",
						width: vw(100),
						height: vh(8),
						top: vh(30),
						position: "absolute",
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
					<Image source={require("../images/LOGO.png")} style={styles.badge} />
					<Image source={require("../images/LOGO.png")} style={styles.badge} />
				</ScrollView>

				<CommentList
					comments={this.props.route.params["biz"].business.comments}
				/>

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
		);
	}
}

export default BizPage;

const styles = StyleSheet.create({
	cardView: {
		marginTop: vh(-0.5),
		padding: 0,
		display: "flex",
		flexDirection: "row",
	},
	img: {
		position: "absolute",
		flex: 1,
		marginLeft: vw(-4.0),
		width: vw(65),
		height: vh(30),
		opacity: 1.0,
		borderRadius: 2,
	},
	badge: {
		top: "1%",
		width: vw(16),
		height: vh(7.1),
	},
});
