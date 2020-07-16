import { combineReducers } from "redux";

const INITIAL_STATE = [];

const isLoggedReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET COMMENTS":
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

		default:
			return false;
	}
};

export default combineReducers({
	isLogged: isLoggedReducer,
});
