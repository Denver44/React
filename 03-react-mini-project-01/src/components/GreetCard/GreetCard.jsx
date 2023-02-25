import React from "react";
import "./index.css";

let time = new Date(2020, 9, 9, 1);
let hrs = time.getHours();
let greeting = "";
let cssStyle = {};

if (hrs >= 1 && hrs <= 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
}
if (hrs >= 12 && hrs <= 17) {
  greeting = "Good Afternoon";
  cssStyle.color = "purple";
}
if (hrs >= 18 && hrs <= 23) {
  greeting = "Good Night";
  cssStyle.color = "red";
}

let heading = {
  color: "blue",
  textTransform: "capitalize",
  textAlign: "center",
  backgroundColor: "yellow",
  width: "600px",
  height: "100px",
  padding: "25px",
  margin: "150px auto",
  borderRadius: "10px",
  fontFamily: "sans-serif",
};

const GreetCard = () => {
  return (
    <h1 style={heading}>
      Hello Sir, <span style={cssStyle}> {greeting}</span>
    </h1>
  );
};

export default GreetCard;
