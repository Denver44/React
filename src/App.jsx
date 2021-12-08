import React, { useState } from "react";
import Accordion from "components/Accordion/Accordion";
import Search from "components/SearchBox/Search";
import AdvancedSearchBox from "components/AdvancedSearchBox/AdvancedSearch";
import Dropdown from "components/Dropdown/Dropdown";
import Clock from "components/Clock/Clock";
import Header from "components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
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

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accordion items={items} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/advancedSearch" element={<AdvancedSearchBox />} />
          <Route path="/dropdown" element={<Dropdown options={options} />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
