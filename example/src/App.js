import "./App.css";

import React from "react";
import useElementSize from "react-element-size";

export default function App() {
  const { setRef, size } = useElementSize();
  return (
    <div className="App">
      <header className="App-header" ref={setRef}>
        <pre>{JSON.stringify(size)}</pre>
      </header>
    </div>
  );
}
