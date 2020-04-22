import { authConst, notificationConst } from './types';
import authAPI from '../../apis/authAPI';



export const getUser = () => (dispatch, getState) => {
    authAPI.get('/user', getState().auth.token.access_token)
        .then(response => dispatch({ type: authConst.GET_USER_DATA, payload: response }))
        .then(() => dispatch({ type: authConst.CLEAN }))
        .catch(error => dispatch({ type: authConst.GET_USER_DATA, payload: error.message }))
};

export const loginAction = credentials => (dispatch, getState) => {
    //Solicitamos el token de acceso
    return authAPI.post('/login', credentials)
        .then(response => dispatch({ type: authConst.LOGIN, payload: response }))
        //Una vez recibido el token se solicitan los datos del usuario usando el token         
        .then(() => dispatch(getUser()))
        .catch(error => dispatch({ type: authConst.ERROR, payload: error.message }));
};

export const logout = () => (dispatch, getState) => {
    return authAPI.post('/logout')
        .then(() => dispatch({ type: authConst.LOGOUT }))
        .catch(error => dispatch({ type: notificationConst.ERROR, payload: error.message }));
};

