import React from 'react';
import { Switch, Route } from "react-router-dom";
import Riwayat from './pages/riwayat';
import Home from './pages/home';
import Notifikasi from './pages/notifikasi';
import Setting from './pages/setting';

function App() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Riwayat} path="/riwayat" />
      <Route component={Notifikasi} path="/notifikasi" />
      <Route component={Setting} path="/setting" />
    </Switch>
  );
}

export default App;
