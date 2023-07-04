import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import File2 from "./File2";

const NameContext = createContext(); //creating context
const myname = "shubham";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    
    <NameContext.Provider value={myname}>  //wraping context_name.Provider and assigning value to it
      <App />
    </NameContext.Provider>
    
  </React.StrictMode>
);

export { NameContext }; //exporting context
