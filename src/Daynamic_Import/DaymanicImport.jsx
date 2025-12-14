import React, { useState, useEffect } from "react";
import MyComponent from "./MyComponent";

const DaymanicImport = () => {
  const [MyComponent, setMyComponent] = useState(() => () => null);

  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(() => module.default);
    });
  }, []);

  return <MyComponent />;
};

export default DaymanicImport;
