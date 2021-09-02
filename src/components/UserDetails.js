import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const { userId } = useParams();
  console.log(users);

  useEffect(() => {
    console.log(users);
  }, [userId]);

  return <div>user details</div>;
};

export default UserDetails;
