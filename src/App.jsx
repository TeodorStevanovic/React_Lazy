import React, { useState, useEffect } from "react";

function App() {
  const [Greeting, setGreeting] = useState(() => () => null);
  const showGreeting = () => {
    import("./Greeting").then((module) => {
      setGreeting(() => module.default);
    });
  };

  return (
    <>
      <button onClick={showGreeting}>Show Greeting</button>
      <Greeting />
    </>
  );
}

export default App;
