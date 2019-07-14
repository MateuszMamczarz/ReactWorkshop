import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './roots/Home';
import Author from './roots/Author';
import Contact from './roots/Contact';
import Header from './components/Header';
import Post from './roots/Post';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/author" component={Author} />
        <Route path="/contact" component={Contact} />
        <Route path='/post/:id' component={Post} />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
