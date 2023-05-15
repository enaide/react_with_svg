import ReactDOM from "react-dom";

import { ChartContextProvider } from "./components/store/chart-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <ChartContextProvider>
    <App />
  </ChartContextProvider>,
  document.getElementById("root")
);
