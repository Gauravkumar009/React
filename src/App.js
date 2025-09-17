import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body.js";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<AppLayout />);