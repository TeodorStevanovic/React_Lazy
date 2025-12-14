import React, { Suspense, useState, lazy } from "react";
import { ClipLoader } from "react-spinners";
import DaymanicImport from "./Daynamic_Import/DaymanicImport";

const First = lazy(() => import("./First/FirstMain"));
const Second = lazy(() => import("./Second/SecondMain"));

const ShowComponent = ({ name }) => {
  switch (name) {
    case "first":
      return <First />;
    case "second":
      return <Second />;
    default:
      return null;
  }
};

function App() {
  const [component, setComponent] = useState("");

  return (
    <>
      <DaymanicImport /> <hr></hr>
    </>
  );
}

export default App;
