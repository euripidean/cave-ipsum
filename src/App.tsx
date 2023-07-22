import React from "react";

const ipsumText = "Written and directed by his red right hand.";

function App() {
  return (
    <div>
      <h1>Cave Ipsum</h1>
      <p>{ipsumText}</p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(ipsumText);
        }}
      >
        Copy
      </button>
    </div>
  );
}

export default App;
