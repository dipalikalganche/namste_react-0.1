/**
 * //nested html structure 
 * 
 * <div id="parent">
 *    <div id = "child">
 *       <h1>I am h1 tag </h1>
 *        <h2>I am h2 tag </h2>
 * </div>
 * 
 */ 

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),
    ])
);
 console.log(parent);
 
//  const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello world from react inside it"
// );

//console.log(heading);// return object
         
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);