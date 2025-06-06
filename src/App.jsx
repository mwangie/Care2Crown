import { useState } from "react";

function App() {
  const [role, setRole] = useState("patient");

  return (
    <div>
      <h1>Care to Crown</h1>
      <div>
        <button onClick={() => setRole("patient")}>Patient</button>
        <button onClick={() => setRole("provider")}>Provider</button>
        <button onClick={() => setRole("transport")}>Transport</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {role === "patient" && <div>Patient booking flow (coming soon)</div>}
        {role === "provider" && <div>Provider availability screen (coming soon)</div>}
        {role === "transport" && <div>Transport coordination view (coming soon)</div>}
      </div>
    </div>
  );
}

export default App;