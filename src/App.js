import React from 'react';
import { Switch, Route } from "react-router-dom";
import Transaksi from './pages/transaksi';
import Home from './pages/home';
import Notifikasi from './pages/notifikasi';
import Profile from './pages/profile';
import Budgeting from './pages/budgeting';
import TukarSaldo from './pages/TukarSaldo'
import TransferSaldo from './pages/TransferSaldo'
import Pay from './pages/pay';
import uTracker from './pages/uTracker';


function App() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Transaksi} path="/transaksi" />
      <Route component={Notifikasi} path="/notifikasi" />
      <Route component={Profile} path="/profile" />
      <Route component={Budgeting} path="/budgeting" />
      <Route component={Pay} path="/upay" />
      <Route component={TukarSaldo} path="/uswitch/tukarsaldo" />
      <Route component={TransferSaldo} path="/uswitch/transfersaldo" />
      <Route component={uTracker} path="/utracker" />
    </Switch>
  );
}

export default App;
