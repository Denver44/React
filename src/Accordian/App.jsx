import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    desc: "React is a Front end Javascript Library",
  },
  {
    title: "Why use React",
    desc: "React is a most popular library in Engineers",
  },
  {
    title: "How do you use React",
    desc: "You use React by Creating components",
  },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
