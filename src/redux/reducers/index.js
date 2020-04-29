import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'// defaults to localStorage for web
// import storageSession from 'redux-persist/lib/storage/session' //Sessions storage
import authReducer from './auth.reducer';
import notificationReducer from './notification.reducer';
import productReducer from './product.reducer';
import saleReducer from './sale.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth', 'form', 'notification', 'products']
}
const authPersistConfig = {
    key: 'auth',
    storage,
    blacklist: ['error']
}
const reducers = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    products: productReducer,
    sales: saleReducer,
    form: formReducer,
    notification: notificationReducer,
});

export default persistReducer(persistConfig, reducers);