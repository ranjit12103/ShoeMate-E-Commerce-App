import { useEffect, useState } from "react";

function App() {
  const [msg, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.msg))
      .catch((error) =>
        console.error("Error fetching msg:", error)
      );
  }, []);

  return (
    <div>
      <h1>Msg</h1>
      <p>{msg || "Loading"}</p>
    </div>
  );
}

export default App;
