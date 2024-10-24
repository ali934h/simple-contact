import "./index.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ارسال نام به Cloudflare Worker
    await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
  };

  return (
    <div className="App">
      <h1>Submit Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
