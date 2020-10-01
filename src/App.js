import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Tests from './pages/Tests';
import SingleTest from './pages/SingleTest';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import CookiePolicy from './pages/CookiePolicy';
import LogIn from './pages/LogIn';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SignUp from './pages/SignUp';
import TermsAndConditions from './pages/TermsAndConditions';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />

      <ScrollToTop>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/cookie-policy' component={CookiePolicy} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          <Route
            exact
            path='/terms-and-conditions'
            component={TermsAndConditions}
          />
          <Route exact path='/tests' component={Tests} />
          <Route exact path='/tests/:slug' component={SingleTest} />
          <Route exact path='/' component={Home} />
          <Route component={Error} />
        </Switch>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
