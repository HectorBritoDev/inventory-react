import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});

export default persistReducer(persistConfig, reducers);