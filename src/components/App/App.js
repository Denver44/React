import Tag from "../Version2/Tag";
import Random from "../Version2/Random";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Random GIF Applications</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
