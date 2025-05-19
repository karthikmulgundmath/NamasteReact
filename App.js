import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * 
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> "This is an example of parent child" </h1>
 *          <h2> "This is an example of parent child 2" </h2>
 *      </div>
 *      <div id = "child2">
 *          <h1> "This is an example of parent child 3" </h1>
 *          <h2> "This is an example of parent child 4" </h2>
 *      </div>
 *      </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    [
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "This is an example of parent child using react"),
            React.createElement("h2", {}, "This is an example of parent child 2 using react")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "This is an example of parent child 3 using react"),
            React.createElement("h2", {}, "This is an example of parent child 4 using react")
        ]
    )
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1", { id: "h eading", x: 1 }, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)