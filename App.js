import React from "react";
import ReactDOM from "react-dom/client";

//react Element
const heading = React.createElement("h1",{id:"title"}, "Namaste bhaau🚀");

console.log(heading);
//jsx
const jsxheading = <h1>Namaste Bhai log🚀 using jsx</h1>
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

root.render(jsxheading);