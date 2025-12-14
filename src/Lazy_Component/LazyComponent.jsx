import React, { lazy, Suspense } from "react";
import { SyncLoader } from "react-spinners";

const MyComponent = lazy(() => import("./MyComponent"));

const LazyComponent = () => {
  return (
    <Suspense fallback={<SyncLoader />}>
      <MyComponent />
    </Suspense>
  );
};

export default LazyComponent;
