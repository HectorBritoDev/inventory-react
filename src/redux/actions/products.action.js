import { productConst } from './types';
import fetchAPI from '../../apis/fetchAPI';

export const getAllProducts = () => (dispatch, getState) => {
    fetchAPI.get('/products')
        .then(response => dispatch({ type: productConst.GET_ALL_PRODUCTS, payload: response.data }))
        .catch(error => dispatch({ type: productConst.ERROR, payload: error }));

}