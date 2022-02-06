import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { protaReducer } from './reducers/protaReducer';
import {regionReducer} from './reducers/regionReducer';
import { starterReducer } from './reducers/starterReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    region: regionReducer,
    prota: protaReducer,
    starter: starterReducer
});
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    ));