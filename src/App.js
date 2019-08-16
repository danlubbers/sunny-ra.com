import React, { Component } from 'react';
import './App.scss';
import routes from './routes';

// import 'babel-polyfill'

import { Helmet } from "react-helmet";


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className='entire-app-wrapper'>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\
            <meta name="theme-color" content="#000000" />
            <meta name="author" content="Sunny Ra" />
            <meta name="description" content="Sunny Ra is an Artist & Educator. She received her Master of Fine Arts at Hunter College, CUNY. She is currently the Museum Educator for K-12 and Community Programs for the Tang Museum at Skidmore College." />
            <meta name="keywords" content="sunny ra, sunny, ra, artist, educator, education, saratoga springs, ny, skidmore, college, new york, manhattan, nyc, hunter, upenn, pafa, art, museum, dark, night, landscapes, paint, painting, oil, charcoal, canvas, paper, work, works, lva, louisville, ky, kentucky, visual, arts, bachelor, fine arts, cum laude, governors school for the arts, " />
            <title>Sunny Ra - Master Painter</title>
            <link rel="alternate" hreflang="en" href="https://sunny-ra.com" />
            <link rel="canonical" href="https://sunny-ra.com" />
        </Helmet>
        <div className="header-app">
          <Header />
        </div>

        {routes}

        <div className="footer-app">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
