import React, { useState, useEffect } from "react";

function App() {
  const [MyComponent, setMyComponent] = useState(() => () => null);

  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(() => module.default);
      console.log(module)
    });
  }, []);

  return <MyComponent />;
}

export default App;
