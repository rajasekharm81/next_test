"use client";

import React, { useState } from "react";

import axios from "axios";

interface ResponseType {
  userme: string;
}

const UsersList = () => {
  const [usersList, setUsersList] = useState<ResponseType[]>([]);

  const token = localStorage.getItem("authToken");

  const handleGetUsersClick = () => {
    axios
      .get("http://127.0.0.1:8004/users-list", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setUsersList(data);
        console.log(data, "success");
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
      <p>Users list</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={handleGetUsersClick} style={{ marginTop: "1rem" }}>
          getUsers
        </button>

        <div>
          <table>
            <th>
              <tr>
                <td>S.no</td>
                <td>Name</td>
              </tr>
            </th>
            <tbody>
              {usersList.map((eachUser, index) => {
                return (
                  <tr key={1 + index}>
                    <td>{index + 1}</td>
                    <td>{eachUser.userme}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
