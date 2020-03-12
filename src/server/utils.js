import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routes from '../Routes';
const render = (req) => {
    const reducer = (state = { name: 'xiaoguoguo' }, action) => {
        return state;
    }
    const store = createStore(reducer)
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}} >
                <Routes />
            </StaticRouter>
        </Provider>

    )
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="/index.js" ></script>
    </body>
    </html>
    `)
}
export default render;