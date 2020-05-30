import { productConst } from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case productConst.GET_ALL:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case productConst.STORE:
            return { ...state, [action.payload.id]: action.payload }
        case productConst.UPDATE:
            return { ...state, [action.payload.id]: action.payload }
        case productConst.DESTROY:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}