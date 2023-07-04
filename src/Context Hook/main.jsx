import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import File2 from "./File2";

const NameContext = createContext();
const myname = "shubham";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NameContext.Provider value={myname}>
      <App />
    </NameContext.Provider>
  </React.StrictMode>
);

export { NameContext };
