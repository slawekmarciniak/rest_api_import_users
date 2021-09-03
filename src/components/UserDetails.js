import React, { useEffect, useState } from "react";
import User from "./User";
import { useParams } from "react-router-dom";

const UserDetails = ({ users, changeView }) => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  const showDetails = () => {
    const userDetails = users.filter((user) => user.login.uuid === userId);
    return userDetails[0];
  };

  useEffect(() => {
    setUser(showDetails());
  }, [userId]);

  return <div>{user && <User user={user} changeView={changeView} />}</div>;
};

export default UserDetails;
