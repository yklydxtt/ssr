import React from 'react';
import Header from './containers/components/Header'
import { renderRoutes } from "react-router-config";
const App=(props)=>{
    return(
        <div>
            <Header />
            {renderRoutes(props.route.routes)}
        </div>
    )
}
export default App;