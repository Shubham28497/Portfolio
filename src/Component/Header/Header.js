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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Header;
