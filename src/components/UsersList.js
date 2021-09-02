import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import User from "./User";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isListActive, setIsListActive] = useState(true);

  const changeView = () => {
    setIsListActive((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="usersContainer">
      {isListActive &&
        users &&
        users.map((user) => (
          <User changeView={changeView} key={user.name.first} user={user} />
        ))}

      <Route exact path="/users/:userId">
        {!isListActive && <UserDetails users={users} />}
      </Route>
    </div>
  );
};

export default UsersList;
