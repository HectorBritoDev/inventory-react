import { productConst } from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case productConst.GET_ALL_PRODUCTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}