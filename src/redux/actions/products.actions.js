import { productConst } from './types';
import fetchAPI from '../../apis/fetchAPI';

export const getAllProducts = () => (dispatch, getState) => {
    fetchAPI.get('/products')
        .then(response => dispatch({ type: productConst.GET_ALL, payload: response.data }))
        .catch(error => dispatch({ type: productConst.ERROR, payload: error }));

}

export const storeProduct = formValues => (dispatch, getState) => {
    fetchAPI.post('/products', formValues)
        .then(response => dispatch({ type: productConst.STORE, payload: response.data }))
        .catch(error => handleError(error, dispatch))
}

export const updateProduct = formValues => (dispatch, getState) => {
    fetchAPI.put('/products/' + formValues.id, formValues)
        .then(response => dispatch({ type: productConst.UPDATE, payload: response.data }))
        .catch(error => handleError(error, dispatch))
}
export const destroyProduct = id => (distpatch, getState) => {
    fetchAPI.destroy('/products/' + id)
        .then(response => distpatch({ type: productConst.DESTROY, payload: id }))
        .catch(error => handleError(error, distpatch));
}

function handleError(error, dispatch) {
    return dispatch({ type: productConst.ERROR, payload: error });
}