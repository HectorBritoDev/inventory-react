import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create store
export const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
export const persistor = persistStore(store);

