import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'

// Paintings Category
// import Paintings2006 from './Components/Paintings/Paintings2006/Paintings2006'
// import Paintings2008 from './Components/Paintings/Paintings2008/Paintings2008'
import Paintings2010 from './Components/Paintings/Paintings2010/Paintings2010'
import Paintings2012 from './Components/Paintings/Paintings2012/Paintings2012'
import Paintings2014 from './Components/Paintings/Paintings2014/Paintings2014'
import Paintings2015 from './Components/Paintings/Paintings2015/Paintings2015'

// Works on Paper Category
import Works2006 from './Components/WorksOnPaper/Works2006/Works2006'
import Works2009 from './Components/WorksOnPaper/Works2009/Works2009'
import Works2012 from './Components/WorksOnPaper/Works2012/Works2012'
import Works2016 from './Components/WorksOnPaper/Works2016/Works2016'

// Gallery Category

import Installation from './Components/Gallery/Installation/Installation'
import StudentWork from './Components/Gallery/StudentWork/StudentWork'
import Commissioned from './Components/Commissioned/Commissioned'

import About from './Components/About/About';
import Exhibition from './Components/Exhibition/Exhibition';

import Collections from './Components/Collections/Collections';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/paintings2006" component={Paintings2006} />
        <Route path="/paintings2008" component={Paintings2008} /> */}
        <Route path="/paintings2010" component={Paintings2010} />
        <Route path="/paintings2012" component={Paintings2012} />
        <Route path="/paintings2014" component={Paintings2014} />
        <Route path="/paintings2015" component={Paintings2015} />

        <Route path="/works2006" component={Works2006} />
        <Route path="/works2009" component={Works2009} />
        <Route path="/works2012" component={Works2012} />
        <Route path="/works2016" component={Works2016} />

        <Route path="/installation" component={Installation} />
        <Route path="/studentwork" component={StudentWork} />

        <Route path="/commissioned" component={Commissioned} />

        <Route path="/about" component={About} />
        <Route path="/exhibition" component={Exhibition} />

        <Route path="/collections/:category" component={Collections}></Route>
    </Switch>
)