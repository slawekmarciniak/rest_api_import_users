import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserDetails from "./UserDetails";
import User from "./User";
import "./style.css";

const UsersList = () => {
  const [open, setOpen] = React.useState(true);
  const [users, setUsers] = useState([]);
  const [isListActive, setIsListActive] = useState(true);

  const changeView = () => {
    setIsListActive((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
          setOpen(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  return (
    <>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
      <div className="usersContainer">
        {isListActive &&
          users &&
          users.map((user) => (
            <User
              isListActive={isListActive}
              key={user.name.first}
              user={user}
              changeView={changeView}
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
    </>
  );
};

export default UsersList;
