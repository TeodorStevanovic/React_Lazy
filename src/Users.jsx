import React from "react";

const Users = () => {
  const user = [
    { id: "1", name: "Teodor" },
    { id: "2", name: "Nikola" },
    { id: "3", name: "Zarko" },
    { id: "4", name: "Lazar" },
  ];

  return user.map((u) => (
    <div key={u.id}>
      <p>ID: {u.id}</p>
      <p>Name: {u.name}</p>
    </div>
  ));
};

export default Users;
