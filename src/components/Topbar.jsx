import React, { useState } from "react";

const Topbar = () => {
  const [hovered, setHovered] = useState(null);

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

  const childdiv = (isHovered) => ({
    cursor: "pointer",
    color: isHovered ? "#ffbe04" : "white",
    fontSize: "20px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "color 0.3s ease, transform 0.3s ease",
  });

  return (
    <div style={parentdiv}>
      <div
        style={childdiv(hovered === "home")}
        onMouseEnter={() => setHovered("home")}
        onMouseLeave={() => setHovered(null)}
      >
        Home
      </div>
      <div
        style={childdiv(hovered === "about")}
        onMouseEnter={() => setHovered("about")}
        onMouseLeave={() => setHovered(null)}
      >
        About Us
      </div>
      <div
        style={childdiv(hovered === "contact")}
        onMouseEnter={() => setHovered("contact")}
        onMouseLeave={() => setHovered(null)}
      >
        Contact Us
      </div>
    </div>
  );
};

export default Topbar;
