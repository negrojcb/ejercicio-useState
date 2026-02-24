import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  const changeName = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;
    setName(newName.trim());
    setNewName("");
  };

  return (
    <div className="App">
      <h2>Teacher Name {name}</h2>
      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          placeholder="Add a name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Change Name</button>
      </form>
    </div>
  );
}

export default App;
