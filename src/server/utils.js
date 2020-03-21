import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { Helmet } from "react-helmet";
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
    const helmet = Helmet.renderStatic();
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
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