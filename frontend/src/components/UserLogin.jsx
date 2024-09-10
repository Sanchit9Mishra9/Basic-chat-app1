import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import "../style.css";
import _ from "loadsh";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState("");

  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
    const a = _.random(1, 50);
    const b = `https://picsum.photos/id/${a}/200/300`;
    // console.log(b);
    // localStorage.setItem("avatar", `https://picsum.photos/id/${a}/200/300`);
    localStorage.setItem("avatar", b);
  };
  return (
    <div className="login_container">
      <div className="login_title">
        <FaReact />
        <h1>Chat App</h1>
      </div>

      <div className="login_form">
        <input
          type="text"
          placeholder="Enter a unique name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
