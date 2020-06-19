////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import About from '../../routes/About/About';
import Coding from '../../routes/Coding/Coding';
import Writing from '../../routes/Writing/Writing';
////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <main>
      <Navigation />

      <Route
        exact
        path={'/'}
        component={About}
      />

      <Route
        path={'/coding'}
        component={Coding}
      />

      <Route 
        path={'/writing'}
        component={Writing}
      />

      <Footer />
    </main>
  );
}

export default App;
