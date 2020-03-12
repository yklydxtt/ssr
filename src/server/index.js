import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';
const content = renderToString(<Home />)
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">${content}</div>
</body>
</html>
`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
