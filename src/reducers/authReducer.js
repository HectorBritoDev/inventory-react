import { LOGIN, LOGOUT, GET_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
    user: null,
    token: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload };
        case LOGOUT:
            return { ...state, token: null, user: null };
        case GET_USER_DATA:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}