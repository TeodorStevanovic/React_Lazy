import React, { lazy } from "react";

const MyFeature = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(async () => {
        const module = await import("./MyFeature");
        resolve(module);
      }, 3000);
    })
);

const MyPage = () => {
  return (
    <>
      <h1>My Page</h1>
      <MyFeature />
    </>
  );
};

export default MyPage;
