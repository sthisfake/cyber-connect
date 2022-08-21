import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";


import App from "./app";

const  rootElement = document.getElementById("root") ;
if (rootElement == null){
  ;
}else {
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
}





 // 👈️ type assertion
