import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

const RootProvider = ({ children }) => {
  return <Provider store={createStore(reducers, {})}>{children}</Provider>;
};

export default RootProvider;
