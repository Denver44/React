import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { items, options } from "./utils/helper";

const MyDropdown = ({ options, selected, setSelected }) => {
  return (
    <Dropdown
      {...{
        options,
        selected,
      }}
      label="Select a color"
      onSelectedChange={setSelected}
    />
  );
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Accordion items={items} />
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <MyDropdown
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
