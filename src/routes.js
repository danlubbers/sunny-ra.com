import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'
import Collections from './Components/Collections/Collections';
import About from './Components/About/About';
import Exhibition from './Components/Exhibition/Exhibition';
import PageNotFound from './Components/PageNotFound/PageNotFound';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/exhibition" component={Exhibition} />
        <Route path="/collections/:category" component={Collections} />
        <Route path='*' component={PageNotFound} />
        <Redirect to='/404' />
    </Switch>
)