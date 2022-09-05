import React, { useEffect, useState } from "react";
import "./App.css";
import { addUser, deleteUser, updateUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [newUserName, setNewUserName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      id: users.length + 1,
      userName: e.target.children[2].value,
      password: e.target.children[6].value,
    });
    e.persist();
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      dispatch(addUser(user));
    }
  }, [user]);

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>userName</label>
        <br />
        <input required />
        <br />
        <label>password</label>
        <br />
        <input required />
        <button type="submit"> submit </button>
      </form>
      <div className="users-div">
        {users.map((user) => {
          return (
            <div key={user.id} id={user.id} className="user-div">
              <p>{user.userName}</p>
              <p>{user.password}</p>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUserName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(updateUser({ id: user.id, newUserName }));
                }}
              >
                {" "}
                Update Username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));

                  console.log(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
