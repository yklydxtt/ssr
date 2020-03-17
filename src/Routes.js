import Home from './containers/Home';
import App from './App'
import Translation from './containers/Translation';
const Routes=[{
    path:'/',
    component:App,
    key:'app',
    loadData: (store) => App.loadData(store),
    routes:[{
        path: "/",
        component: Home,
        exact:true,
        loadData: (store) => Home.loadData(store),
        key:1
    },{
        path: "/Translation",
        component: Translation,
        exact:true,
        key:2
    }]
}]
export default Routes;