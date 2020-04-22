import { authConst } from '../actions/types';

const INITIAL_STATE = {
    user: null,
    token: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authConst.LOGIN:
            return { ...state, token: action.payload };
        case authConst.LOGOUT:
            return { ...state, token: null, user: null };
        case authConst.GET_USER_DATA:
            return { ...state, user: action.payload };
        case authConst.ERROR:
            return { ...state, error: action.payload }
        case authConst.CLEAN:
            return { ...state, error: null }
        default:
            return state;
    }
}