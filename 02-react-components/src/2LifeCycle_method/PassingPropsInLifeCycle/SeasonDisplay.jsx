import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "Sun",
  },
  winter: {
    text: "Let's wear our Jacket!",
    iconName: "Snow",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text = seasonConfig[season].text;
  const icon = seasonConfig[season].iconName;
  return (
    <div>
      {icon}
      <h1>{text}</h1>
      {icon}
    </div>
  );
};

export default SeasonDisplay;
