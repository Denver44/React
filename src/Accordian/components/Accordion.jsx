import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>{<p>{item.desc}</p>}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
