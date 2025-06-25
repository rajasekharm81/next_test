import React from "react";

const Nav = () => {
  return (
    <div className="d-flex col-12 justify-content-around align-items-center">
      <div className="col-4">
        <h1>logo</h1>
      </div>
      <div className="d-flex col-8 justify-content-around align-items-center">
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
        <p>item4</p>
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      </div>
    </div>
  );
};

export default Nav;
