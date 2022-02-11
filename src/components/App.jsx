import React from "react";
import Dictionary from "../components/dictionary/Dictionary";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <Dictionary data={emojipedia} />
    </div>
  );
}

export default App;
