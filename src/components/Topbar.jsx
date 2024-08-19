import React from "react";

const Topbar = () => {
  const diva = {
    height: "15vh",
    backgroundColor: "#2e9ae5",
    position: "relative",
    borderBottom: "5px solid white",
  };
  const divb = {
    height: "auto",
    width: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={diva}>
      <div style={divb}></div>
    </div>
  );
};

export default Topbar;
