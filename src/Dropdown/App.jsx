import Dropdown from "./Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Shirt is Green",
    value: "green",
  },
  {
    label: "The Sky is Blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
export default App;
