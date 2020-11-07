import React from "react";

const todos = ["Go to market", "Buy food", "Make dinner"];

function App() {
  return (
    <div className="App">
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;