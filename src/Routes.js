import React from 'react';
import { Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Login" component={Login}></Route>
        </div>
    )
}
export default Routes;