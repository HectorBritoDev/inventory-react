import { productConst } from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case productConst.GET_ALL_PRODUCTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case productConst.STORE_PRODUCT:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}