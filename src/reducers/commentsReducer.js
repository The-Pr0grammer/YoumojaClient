import { FETCH_COMMENTS } from "../actions/commentsAction";

export default commentsReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH COMMENTS":
			console.log(action);
			return [action.payload.data, ...state];
	}
	return state;
};
