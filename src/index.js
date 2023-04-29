import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import { createContext } from "react";

export const TreesContext = createContext();

const trees = [
  {id:"1", type:"Cedro", location: "CR", qty:2560},
  {id:"2", type:"Oak", location: "CAN", qty:2780},
  {id:"3", type:"Maple", location: "US", qty:3650},
  {id:"4", type:"Poplar", location: "MX", qty:6530},
  {id:"5", type:"Nogal", location: "US", qty:4560},
  {id:"6", type:"Pino", location: "COL", qty:1540},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreesContext.Provider value={{trees}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TreesContext.Provider>
);
