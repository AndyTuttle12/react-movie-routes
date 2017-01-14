import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SingleMovie from './SingleMovie';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
ReactDOM.render(
  <Router history={hashHistory} >
  	<Route path="/" component={App} />
  	<Route path="/:movie" component={SingleMovie} />
  	<Route path="/:movie/:cast" component={SingleMovie} />
  </Router>,
  document.getElementById('root')
);
