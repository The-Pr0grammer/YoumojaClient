import { combineReducers } from "redux";

const INITIAL_STATE = false;

const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case "SIGN IN":
			return !state;
	}
};

export default combineReducers({
	loggedIn: loggedReducer,
});
