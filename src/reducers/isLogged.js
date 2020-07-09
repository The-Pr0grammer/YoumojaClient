import { combineReducers } from "redux";

const INITIAL_STATE = false;

const isLoggedReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SIGN IN":
			return !state;

		default:
			return false;
	}
};

export default combineReducers({
	isLogged: isLoggedReducer,
});
