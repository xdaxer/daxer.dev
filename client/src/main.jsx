import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/router/router";
import { Provider } from "./context/context";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <Router />
    </Provider>
  </BrowserRouter>,
);
