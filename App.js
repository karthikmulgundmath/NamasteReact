import React from "react";
import ReactDOM from "react-dom/client";

const heading  = React.createElement("h1", {}, "Hellasdo I am Karthik");
console.log('heading', heading)

// JSX does not has HTML inside javascript it is a new sytax to write HTML in javascript

//parcel transpiles the JSX code to javascript and Babel is the tool that transpiles the JSX code to javascript
//behind the scenes JSX is converted to React.createElement()
const JSXHeading = <h1 id="heading">Hello I am Karthik</h1>
console.log('JSXHeading', JSXHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeading);
