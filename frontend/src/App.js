import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/home";
import vehicleRegister from "./components/vehicleManagement/registerVehicle";
import viewVehicles from "./components/vehicleManagement/viewVehicles";
import DeleteVehiclePage from "./components/vehicleManagement/deleteVehicles";
import UpdateVehiclePage from "./components/vehicleManagement/updateVehicles";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/registerVehicle" component={vehicleRegister} />
            <Route path="/viewVehicles" component={viewVehicles} />
            <Route path="/deleteVehicle/:id" component={DeleteVehiclePage} />
            <Route path="/updateVehicle/:id" component={UpdateVehiclePage} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
