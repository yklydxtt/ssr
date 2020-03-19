import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { renderRoutes } from "react-router-config";
const render = (req, Routes, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context} >
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    )
    const cssStr = context.css.join()
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${cssStr}</style>
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
        window.context ={
             state:${JSON.stringify(store.getState())}
        }
        </script>
        <script src="/index.js" ></script>
    </body>
    </html>
    `)
}
export default render;