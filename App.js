import React from "react";
import ReactDOM from "react-dom/client"; 
   
const elem = <span>React Element</span>;

const Title = () =>(
   <h1 className="head" tabIndex="5">
        Namaste React using JSX
   </h1>
);

const HeadingComponent = () => (
   <div id="container">
      {Title()}
       <h1 className="heading">namaste React Functional Component</h1>
   </div>  
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);