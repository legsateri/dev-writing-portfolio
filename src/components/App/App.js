////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Footer from '../Footer/Footer';
////////////////////////////////////////////////////////////////////////////////
import About from '../../routes/About/About';
import Barrier from '../../routes/Barrier/Barrier';
import Coding from '../../routes/Coding/Coding';
import CoverToCover from '../../routes/CoverToCover/CoverToCover';
import LossForWords from '../../routes/LossForWords/LossForWords';
import RaiseEmails from '../../routes/RaiseEmails/RaiseEmails';
import RaiseHoliday from '../../routes/RaiseHoliday/RaiseHoliday';
import SD308 from '../../routes/SD308/SD308';
import Vida from '../../routes/Vida/Vida';
import Writing from '../../routes/Writing/Writing';
////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <main>
      <Route
        exact
        path={'/'}
        component={About}
      />

      <Route
        path={'/writing/barrier'}
        component={Barrier}
      />

      <Route
        exact
        path={'/coding'}
        component={Coding}
      />

      <Route
        path={'/coding/cover-to-cover'}
        component={CoverToCover}
      />

      <Route
        path={'/coding/loss-for-words'}
        component={LossForWords}
      />

      <Route
        path={'/writing/raise-emails'}
        component={RaiseEmails}
      />

      <Route
        path={'/writing/raise-holiday'}
        component={RaiseHoliday}
      />

      <Route
        path={'/writing/sd308'}
        component={SD308}
      />

      <Route
        path={'/writing/vidas-angels'}
        component={Vida}
      />

      <Route
        exact
        path={'/writing'}
        component={Writing}
      />

      <Footer />
    </main>
  );
}

export default App;
