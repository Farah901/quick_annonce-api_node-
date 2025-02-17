import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./topNavbar.css";

const TopNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Change Language
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="top-navbar">
      <select className="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">spanish</option>
      </select>

      <button className={`dark-mode-button ${darkMode ? "active" : ""}`} onClick={toggleDarkMode}>
        {darkMode ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default TopNavbar;
