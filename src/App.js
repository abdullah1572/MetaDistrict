import './App.scss';
import React from 'react';
import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Assets/pilot/PilotCommandCondensed-vmepL.woff'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/landing/footer/Footer.js';
import Navbar from './components/landing/header/Navbar.js';
function App() {
  return (
    <>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
