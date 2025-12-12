import React, { Suspense, useState, lazy } from "react";
import { ClipLoader } from "react-spinners";

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
      <label>
        Loaded Component:{" "}
        <select
          value={component}
          onChange={(e) => setComponent(e.target.value)}
        >
          <option value="">None</option>
          <option value="first">First</option>
          <option value="second">Second</option>
        </select>
      </label>

      <Suspense fallback={<ClipLoader />}>
        <ShowComponent name={component} />
      </Suspense>
    </>
  );
}

export default App;
