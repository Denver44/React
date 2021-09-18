import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { Provider } from "react-redux";
import commentsStore from "./store/commentsStore";
import { createStore } from "redux";

const store = createStore(commentsStore);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
