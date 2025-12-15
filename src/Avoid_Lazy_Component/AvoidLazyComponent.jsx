import React, { lazy, Suspense, useState } from "react";
import { BeatLoader } from "react-spinners";

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

const AvoidLazyComponent = () => {
  const [component, setComponent] = useState("");

  return (
    <label>
      Loaded Component:{" "}
      <select value={component} onChange={(e) => setComponent(e.target.value)}>
        <option value="">None</option>
        <option value="first">First</option>
        <option value="second">Second</option>
      </select>
      <Suspense fallback={<BeatLoader />}>
        <ShowComponent name={component} />
      </Suspense>
    </label>
  );
};

export default AvoidLazyComponent;