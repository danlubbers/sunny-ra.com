import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'
import About from './Components/About/About';
import Exhibition from './Components/Exhibition/Exhibition';

import Collections from './Components/Collections/Collections';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/exhibition" component={Exhibition} />
        <Route path="/collections/:category" component={Collections}></Route>
    </Switch>
)