import { LOGIN, LOGOUT, GET_USER_DATA } from './types';
import authAPI from '../apis/authAPI';

export const loginAction = credentials => (dispatch, getState) => {
    //Solicitamos el token de acceso
    return authAPI.post('/login', credentials)
        .then(response => dispatch({ type: LOGIN, payload: response }))
        //Una vez recibido el token se solicitan los datos del usuario usando el token         
        .then(() => {
            authAPI.get('/user', getState().auth.token.access_token)
                .then(response => dispatch({ type: GET_USER_DATA, payload: response }))
        })
        .catch(error => dispatch({ type: LOGIN, payload: error.message }));
};

export const logout = () => { return { type: LOGOUT } };