import React, { useState, useEffect } from 'react';
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
import { Notifications } from 'react-push-notification';
import { ShimmerPostList } from "react-shimmer-effects";


function App() {
  const [loading, setLoading] = useState(true);
  // frist load page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // 1000 milisecond
    }, 500);
  }, []);
  return (
    <div>
      <Notifications />
      {loading ? (
        <ShimmerPostList postStyle="STYLE_FOUR" col={1} row={2} gap={30}/>
      ) : (
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
      )}
    </div>
  );
}

export default App;
