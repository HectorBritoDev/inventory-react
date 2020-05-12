import { productConst } from './types';
import fetchAPI from '../../apis/fetchAPI';

export const getAllProducts = () => (dispatch, getState) => {
    fetchAPI.get('/products')
        .then(response => dispatch({ type: productConst.GET_ALL_PRODUCTS, payload: response.data }))
        .catch(error => dispatch({ type: productConst.ERROR, payload: error }));

}

export const storeProduct = formValues => (dispatch, getState) => {
    fetchAPI.post('/products', formValues)
        .then(response => dispatch({ type: productConst.STORE_PRODUCT, payload: response.data }))
        .catch(error => handleError(error, dispatch))
}

function handleError(error, dispatch) {
    return dispatch({ type: productConst.ERROR, payload: error });
}