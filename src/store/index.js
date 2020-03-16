import { combineReducers } from 'redux'
import { reducer as homeReducer } from "../containers/Home/store/index"
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import serverRequest from '../server/request';
import clientRequest from '../client/request';
const reducer = combineReducers({
    home: homeReducer
});

export const serverStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest)))
}
export const clientStore = () => {
    const defaultState=window.context.state;
    return createStore(reducer, defaultState,applyMiddleware(thunk.withExtraArgument(clientRequest)))
}

