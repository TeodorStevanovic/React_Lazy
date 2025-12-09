import React, { lazy } from "react";

const MyFeature = lazy(() => import("./MyFeature"));

const MyPage = () => {
  return (
    <>
      <h1>My Page</h1>
      <MyFeature />
    </>
  );
};

export default MyPage;
