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
import { Card } from "react-native-elements";
import axios from "axios";

class Businesses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesesses: [],
			page: 1,
			error: null,
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
	render() {
		return (
			<FlatList
				style={styles.list}
				contentContainerStyle={{
					backgroundColor: "black",
					alignItems: "center",
					justifyContent: "center",
					// marginTop: "10%",
				}}
				data={this.state.businesesses}
				keyExtractor={(biz) => biz.id.toString()}
				renderItem={({ item }) => (
					<ImageBackground
						source={"../images/Cd7AR4EW8AAJ8IB.jpg"}
						style={styles.bg}
					>

						
							<Card
								containerStyle={{
                  // backgroundColor: 'transparent',
                  padding: 0,
									borderWidth: 0,
									shadowColor: "rgba(0,0,0, 0.0)",
									shadowOffset: { height: 0, width: 0 },
									shadowOpacity: 0,
									shadowRadius: 0,
                  elevation: 0,
								}}
							>
								<Image
									style={styles.img}
									source={require("../images/30minneapolis-videoSixteenByNine3000-scaled.jpg")}
								/>
								<Text>{item.login}</Text>
							</Card>
              </ImageBackground>
				)}
			/>
		);
	}
}

export default Businesses;

const styles = StyleSheet.create({
	bg: {
    backgroundColor: "transparent",
    opacity: 0.9,
		padding: 0,
		borderWidth: 0,
		width: 400,
    height: 300,
	},
	list: {
    opacity: 0.9,
		width: "100%",
	},
	img: {
		width: undefined,
		height: 265,
	},
});
