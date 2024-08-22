import React from "react";
import { images } from "../assets/assets";

const About = () => {
  const css = {
    global: {
      textAlign: "center",
    },
    main: {
      height: "50vh",
      marginTop: "30px",
      borderTop: "1px solid white",
      display: "flex",
      padding: "5px",
    },
    left: {
      flex: 1,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${images.mountain_one})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    right: {
      flex: 1,
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "15px",
      flexDirection: "column",
    },
    hr: {
      border: "0",
      height: "1px",
      background: "#ccc",
      margin: "20px auto",
      width: "20%",
      borderRadius: "10rem",
    },
  };

  return (
    <div style={css.global}>
      <h1>ABOUT</h1>
      <hr style={css.hr} />
      <div style={css.main}>
        <div style={css.left}></div>
        <div style={css.right}>
          <h1>Who are we ?</h1>
          <hr style={css.hr} />
          <p>
            If you want to build custom websits, software and mobile apps. Our
            IT team is here to deal with it. The more fast payoff the more fast
            service
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
