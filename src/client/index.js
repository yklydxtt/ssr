import React from 'react';
import reactdom from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from '../Routes';
import { clientStore } from "../store/index";
const App = () => {
    const store = clientStore()
    return (
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes(Routes)}
            </BrowserRouter>
        </Provider>
    )
}
reactdom.hydrate(<App />, document.getElementById("root"))