import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserDetails from "./UserDetails";
import User from "./User";
import getData from "../api/api";
import "./style.css";

const UsersList = () => {
  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [isListActive, setIsListActive] = useState(true);

  async function getDataFromApi() {
    const data = await getData();
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      getDataFromApi();
      setOpen(false);
    }, 5000);
  }, []);

  const changeView = () => {
    setIsListActive((prev) => !prev);
  };

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
