import { notificationConst } from '../actions/types';

const INITIAL_STATE = {
    success: null,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case notificationConst.ERROR:
            return { ...state, error: action.payload }
        case notificationConst.SUCCESS:
            return { ...state, success: action.payload }
        default:
            return state;
    }
}