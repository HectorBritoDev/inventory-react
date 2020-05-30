import { categoryConst } from '../actions/types';
import fetchApi from '../../apis/fetchAPI';

export const getAllCategories = () => (dispatch, getState) => {
    fetchApi.get('/categories')
        .then(response => dispatch({ type: categoryConst.GET_ALL, payload: response.data }))
        .catch(error => handeError(error, dispatch));
}

function handeError(error, dispatch) {
    return dispatch({ type: categoryConst.ERROR, payload: error })
}