import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { reducer as homeReducer } from "../containers/Home/store/index"
import { reducer as loginReducer } from "../components/Header/store/index"
import { reducer as translationReducer } from "../containers/Translation/store/index"
import serverRequest from '../server/request';
import clientRequest from '../client/request';
const reducer = combineReducers({
    home: homeReducer,
    login:loginReducer,
    translation:translationReducer
});

export const serverStore = (req) => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest(req))))
}
export const clientStore = () => {
    const defaultState=window.context.state;
    return createStore(reducer, defaultState,applyMiddleware(thunk.withExtraArgument(clientRequest)))
}

