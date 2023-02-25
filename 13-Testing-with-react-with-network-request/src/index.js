import ReactDOM from "react-dom";
import App from "App";
import RootProvider from "RootProvider.js";
import "./index.css";

ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById("root")
);
