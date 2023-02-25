import React from "react";
const Person = ({ name, hairColor, eyeColor }) => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
};

export default Person;
