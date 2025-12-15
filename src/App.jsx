import React, { Suspense, useState, lazy } from "react";
import { ClipLoader } from "react-spinners";
import DaymanicImport from "./Daynamic_Import/DaymanicImport";
import LazyComponent from "./Lazy_Component/LazyComponent";
import AvoidLazyComponent from "./Avoid_Lazy_Component/AvoidLazyComponent";

function App() {
  const [component, setComponent] = useState("");

  return (
    <>
      <DaymanicImport /> <hr />
      <LazyComponent /> <hr />
      <AvoidLazyComponent /> <hr />
    </>
  );
}

export default App;
