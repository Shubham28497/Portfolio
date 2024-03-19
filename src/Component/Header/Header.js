import React from "react";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-contents">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Shubham Gupta</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer💙",
              1000,
              "Frontend Developer✅",
              1000,
              "React Developer✌️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          ></Typical>
        </h2>
      </div>
    </div>
  );
};

export default Header;
