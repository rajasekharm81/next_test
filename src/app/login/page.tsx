"use client";

import React, { useState } from "react";

import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8004/user-login", {
        username: username,
        password: password,
      })
      .then(({ data }) => {
        localStorage.setItem("authToken", data.data.authToken);
        window.location.href = "/users";
      })
      .catch((e) => {
        console.log(e, "failed");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Login</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>User name</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </div>

        <button onClick={handleLogin} style={{ marginTop: "1rem" }}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
