import { productConst } from '../actions/types';

const _INITIAL_STATE = {
    all: {},
    error: null
}
export default (state = _INITIAL_STATE, action) => {
    switch (action.type) {
        case productConst.GET_ALL_PRODUCTS:
            return { ...state, all: action.payload }
        case productConst.ERROR:
            return { ...state, error: action.payload }
        case productConst.CLEAN:
            return { ...state, error: null }
        default:
            return state;
    }
}