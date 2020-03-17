import React from 'react';
import { renderRoutes } from "react-router-config";
import Header from './components/Header'
import { getLogin } from './components/Header/store/actions'
const App = (props) => {
    return (
        <div>
            <Header />
            {renderRoutes(props.route.routes)}
        </div>
    )
}
App.loadData=(store)=>{
    return store.dispatch(getLogin())
}
export default App