import React, { lazy, useState } from "react";

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
  const [showUsers, setShowUsers] = useState(false);

  return (
    <>
      <h1>My Page</h1>
      <button onClick={() => setShowUsers(prev => !prev)}>{showUsers ? "Hide" : "Show"} Users List</button>
      {showUsers && <Users />}
    </>
  );
};

export default MyPage;
