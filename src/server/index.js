import express from 'express';
import proxy from'express-http-proxy';
import { matchRoutes } from "react-router-config";
import Routes from '../Routes';
import render from './utils';
import { serverStore } from "../store/index";
const app = express()
const port = 3000
app.use(express.static('public'))

app.use('/api',proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
      var parts = req.url.split('?');
      var queryString = parts[1];
      var updatedPath = `/ssr/api${parts[0]}`;
      return updatedPath + (queryString ? '?' + queryString : '');
    }
  }));

app.get('*', (req, res) => {
    const store = serverStore()
    const branch = matchRoutes(Routes, req.path);
    const promises = branch.map(({ route }) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });
    Promise.all(promises).then(() => {
        res.send(render(req,Routes,store))
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
