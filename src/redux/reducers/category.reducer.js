import { categoryConst } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case categoryConst.GET_ALL:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}