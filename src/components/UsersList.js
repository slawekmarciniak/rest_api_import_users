import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import User from "./User";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="usersContainer">
      {users && users.map((user) => <User key={user.name.first} user={user} />)}
      <Route path="/users/:userId" component={<UserDetails users={users} />} />
    </div>
  );
};

export default UsersList;
