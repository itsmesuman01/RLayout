import React from "react";

const Topbar = () => {
  const parentdiv = {
    height: "10vh",
    backgroundColor: "#2e9ae5",
    display: "flex",
    gap: "5rem",
    justifyContent: "end",
    alignItems: "center",
    borderBottom: "5px solid white",
    paddingRight: "1rem",
  };

  const childdiv = {
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
  };

  return (
    <div style={parentdiv}>
      <div style={childdiv} className="diva">
        Home
      </div>
      <div style={childdiv} className="divb">
        About Us
      </div>
      <div style={childdiv} className="divc">
        Contact Us
      </div>
    </div>
  );
};

export default Topbar;
