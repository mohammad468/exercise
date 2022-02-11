import React, { useEffect } from "react";

// !redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersState);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>usersList</h1>
      {usersData.loading ? (
        <h2>loading...</h2>
      ) : usersData.error ? (
        <p>{usersData.error}</p>
      ) : (
        usersData.users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
};

export default Users;