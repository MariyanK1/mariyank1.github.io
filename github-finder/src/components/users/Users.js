import React from "react";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

function Users({ users, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
