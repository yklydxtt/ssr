import React from 'react';
import reactdom from 'react-dom';
import Home from '../containers/Home'
reactdom.hydrate(<Home/>,document.getElementById("#root"))