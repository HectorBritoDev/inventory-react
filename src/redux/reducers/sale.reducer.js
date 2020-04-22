import { saleConst } from '../actions/types';
const _INITIAL_STATE = {
    all: {},
    error: null
}
export default (state = _INITIAL_STATE, action) => {
    switch (action.type) {
        case saleConst.GET_ALL_SALES:
            return { ...state, all: action.payload }
        case saleConst.ERROR:
            return { ...state, error: action.payload }
        case saleConst.CLEAN:
            return { ...state, error: null }
        default:
            return state;
    }
}