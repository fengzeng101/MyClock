import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import "./clock.scss";

function App() {
  return (
    <div className="App">
      <Clock title="Sydney" datediff={0} />     
    </div>
  );
}

export default App;
