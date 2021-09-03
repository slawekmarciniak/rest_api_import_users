import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import User from "./User";

import "./style.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isListActive, setIsListActive] = useState(true);

  const changeView = () => {
    console.log("zmina view");
    setIsListActive((prev) => !prev);
  };

  useEffect(() => {
    console.log("render");
  });

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
          <User
            changeView={changeView}
            isListActive={isListActive}
            key={user.name.first}
            user={user}
          />
        ))}

      <Route exact path="/users/:userId">
        {!isListActive && (
          <UserDetails
            isListActive={isListActive}
            users={users}
            changeView={changeView}
          />
        )}
      </Route>
    </div>
  );
};

export default UsersList;
