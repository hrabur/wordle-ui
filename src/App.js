import "./App.css";
import Grid from "./Grid";
import { useState } from "react";

const DEFAULT_WORDS = [
  {
    w: "notChecked",
    h: "noMatch",
    i: "letterMatch",
    l: "positionMatch",
    e: "notMatch",
  },
  {
    w: "notChecked",
    h: "noMatch",
    i: "letterMatch",
    l: "positionMatch",
    e: "notMatch",
  },
  {},
  {},
  {},
  {},
];

function App() {
  const [words, setWords] = useState(DEFAULT_WORDS);

  return (
    <div className="App">
      <Grid words={words} />
    </div>
  );
}

export default App;
