import React, { useState } from "react";
import Accordion from "components/Accordion/Accordion";
import Search from "components/SearchBox/Search";
import AdvancedSearchBox from "components/AdvancedSearchBox/AdvancedSearch";
import Dropdown from "components/Dropdown/Dropdown";
import GreetCard from "components/GreetCard/GreetCard";
import Header from "components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const items = [
  {
    title: "What is React?",
    desc: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    desc: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    desc: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  console.log("selected ", selected);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accordion items={items} />} />
          <Route
            path="/dropdown"
            element={
              <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/advancedSearch" element={<AdvancedSearchBox />} />
          <Route path="/greet" element={<GreetCard />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
