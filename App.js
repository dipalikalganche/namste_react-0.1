import React from "react";
import ReactDOM from "react-dom/client"; 
                                                                 
//jsx (transpiled before it reaches the js) -parcel-Babel

//jsx =>  babel is transpiles it to React.createElement => ReactElement -Js object =>HTMLElement(render)

//React element
const heading =(
   <h1 className="head" tabIndex="5">
        Namaste React using JSX
   </h1>
);

//React functional Component 
const HeadingComponent = () => (
   <div id="container">
       <h1 className="heading">namaste React Functional Component</h1>
   </div>  
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);