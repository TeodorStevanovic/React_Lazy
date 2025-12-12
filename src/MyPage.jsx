import React, { lazy } from "react";

const Users = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(async () => {
        const module = await import("./Users");
        resolve(module);
      }, 3000);
    })
);

const MyPage = () => {
  return (
    <>
      <h1>My Page</h1>
      <Users />
    </>
  );
};

export default MyPage;
