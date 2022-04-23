import React from 'react';
import { Switch, Route } from "react-router-dom";
import Riwayat from './pages/riwayat';
import Home from './pages/home';
import Notifikasi from './pages/notifikasi';
import Setting from './pages/setting';
import Budgeting from './pages/budgeting';
import TukarSaldo from './pages/TukarSaldo'
import TransferSaldo from './pages/TransferSaldo'
import uTracker from './pages/uTracker';


function App() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Riwayat} path="/riwayat" />
      <Route component={Notifikasi} path="/notifikasi" />
      <Route component={Setting} path="/setting" />
      <Route component={Budgeting} path="/budgeting" />
      <Route component={TukarSaldo} path="/uswitch/tukarsaldo" />
      <Route component={TransferSaldo} path="/uswitch/transfersaldo" />
      <Route component={uTracker} path="/utracker" />
    </Switch>
  );
}

export default App;
