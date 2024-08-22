import React, { useState, useEffect } from "react";
import { images } from "../assets/assets"; // Import your images

const Carasoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [
    images.mountain_one,
    images.mountain_two,
    images.mountain_three,
    images.mountain_four,
    images.mountain_five,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageDivStyle = {
    height: "60vh",
    position: "relative",
    backgroundImage: `url(${imageArray[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
  };

  return <div style={imageDivStyle}></div>;
};

export default Carasoul;
