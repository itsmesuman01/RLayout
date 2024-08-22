import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Topbar = () => {
  const [hovered, setHovered] = useState(null);
  const { i18n, t } = useTranslation();

  const css = {
    parentdiv: {
      height: "10vh",
      backgroundColor: "#2e9ae5",
      display: "flex",
      gap: "5rem",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "5px solid white",
      padding: "0 1rem 0 1rem",
    },
    button: {
      backgroundColor: "white",
      border: "none",
      height: "30px",
      width: "9rem",
      borderRadius: "5px",
      cursor: "pointer",
      color: "black",
      marginTop: "10px"
    },
    navContainer: {
      display: "flex",
      gap: "5rem",
    },
  };

  const childdiv = (isHovered) => ({
    cursor: "pointer",
    color: isHovered ? "#ffbe04" : "white",
    fontSize: "20px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "color 0.3s ease, transform 0.3s ease",
  });

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={css.parentdiv}>
      <div>
        {i18n.language === 'en' ?
          (<button style={css.button} onClick={() => handleLanguageChange('np')}>Translate Nepali</button>) :
          (<button style={css.button} onClick={() => handleLanguageChange('en')}>Translate English</button>)}
      </div>
      <div style={css.navContainer}>
        <div
          style={childdiv(hovered === "home")}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          {t('home')}
        </div>
        <div
          style={childdiv(hovered === "about")}
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          {t('about')}
        </div>
        <div
          style={childdiv(hovered === "contact")}
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          {t('contact')}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
