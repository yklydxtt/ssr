import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from "react-router-config";
import Routes from '../Routes';
import render from './utils';
import { serverStore } from "../store/index";
const app = express()
const port = 3000
app.use(express.static('public'))

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    var parts = req.url.split('?');
    var queryString = parts[1];
    var updatedPath = `/ssr/api${parts[0]}`;
    return updatedPath + (queryString ? '?' + queryString : '');
  }
}));

app.get('*', (req, res) => {
  const store = serverStore(req)
  const branch = matchRoutes(Routes, req.path);
  const promises = branch.map(({ route }) => {
    if(route.loadData){
      const promise = new Promise((resolve,reject)=>{
        route.loadData(store).then(resolve).catch(resolve)
    })
    return promise
    }else{
      return Promise.resolve(null);

    }
  });
  Promise.all(promises).then(() => {
    const context = {css:[]}
    const html = render(req, Routes, store, context)
    if (context.notFound) {
      res.status(404);
    }else if(context.action==='REPLACE'){
      res.redirect('/')
    }
    res.send(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
