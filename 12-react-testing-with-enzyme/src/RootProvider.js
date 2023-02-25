import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

const RootProvider = ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};

export default RootProvider;
