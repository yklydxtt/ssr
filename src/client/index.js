import React from 'react';
import reactdom from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Routes from '../Routes';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from "../store/index";
const App = () => {
    const store = createStore(reducer, applyMiddleware(thunk))
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}
reactdom.hydrate(<App />, document.getElementById("root"))