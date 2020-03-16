import Home from './containers/Home';
import App from './App'
import Login from './containers/Login';
const Routes=[{
    path:'/',
    component:App,
    key:'app',
    routes:[{
        path: "/",
        component: Home,
        exact:true,
        loadData: (store) => Home.loadData(store),
        key:1
    },{
        path: "/Login",
        component: Login,
        exact:true,
        key:2
    }]
}]
export default Routes;