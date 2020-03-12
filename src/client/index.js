import React from 'react';
import reactdom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from "react-router-dom";
import Routes from '../Routes';
const reducer = (state = { name: 'xiaoguoguo' }, action) => {
    return state;
}
const store = createStore(reducer)
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}
reactdom.hydrate(<App />, document.getElementById("root"))