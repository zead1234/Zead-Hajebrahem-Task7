import "./App.css";
import React from "react";

import NavbarComponent from "./components/NavbarComponent";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
