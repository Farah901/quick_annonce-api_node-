import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";
import {annonces} from "./ManageAds";


const categories = [
  {
    name: "Apartment",
    image: import("./assets/images/appipi.jpg"),
    path: "/category/Apartments",
  },
  {
    name: "Clothes",
    image: import("./assets/images/clothessse.jpg"),
    path: "/category/Clothes",
  },
  {
    name: "Electronics & Technologies",
    image: import("./assets/images/electronics.jpg"),
    path: "/category/Electronics & Technologies",
  },
  {
    name: "Jobs & Internship",
    image: import("./assets/images/jobbbs.jpg"),
    path: "/category/Jobs & Internship",
  },
  {
    name: "Vehicles",
    image: import("./assets/images/vihicles.jpg"),
    path: "/category/Vehicles",
  },
];

const categoriesList = [
  "All Categories",
  "Electronics & Technologies",
  "Clothes",
  "Vehicles",
  "Jobs & Internship",
  "Apartments",
];

const citiesList = [
  "All Cities",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
];

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const [ads, setAds] = useState([...annonces]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    const newAds = storedAds.filter(
      (storedAd) => !ads.some((ad) => ad.id === storedAd.id)
    );
    setAds((prevAds) => [...prevAds, ...newAds]); // Ajouter seulement les nouvelles annonces
  }, []);  // Ajoutez ici `ads` pour résoudre l'avertissement
  

  const deleteAd = (index) => {
    const newAds = [...ads];
    newAds.splice(index, 1);
    setAds(newAds);
    localStorage.setItem("ads", JSON.stringify(newAds)); // Sauvegarder dans le localStorage
  };
  const filteredProducts = ads.filter((product) => {
    return (
      (selectedCategory === "All Categories" ||
        product.category === selectedCategory) &&
      (selectedCity === "All Cities" || product.city === selectedCity)
    );
  });

  return (
    <div className="all">
      <div className="home-container">
        <div className="home-content">
        {/* <button className="dark-mode-toggle" onClick={toggleDarkMode}>
  {darkMode ? "🌙" : "☀️"}
</button> */}
          <div className="text-container">
            <h2 className="tit">{t("title")}</h2>
            {/* <button className="buy-button">{t("buyNow")}</button> */}
          </div>
        </div>

        <div className="info-section">
          <h2>{t("welcome")}</h2>
          <p>{t("description")}</p>
          <button className="post-ad-button">
            <b>{t("postAd")}</b>
          </button>
        </div>

        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => navigate(category.path)}
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">{category.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="filters-container">
          <select
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoriesList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="filter-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {citiesList.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="products-section">
          {filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  <b>Category:</b> {product.category}
                </p>
                <p>
                  <b>Price:</b> {product.price}
                </p>
                <p>
                  <b>City:</b> {product.city}
                </p>
              </div>
              {/* Afficher le bouton de suppression uniquement pour les annonces ajoutées via le formulaire */}
              {product.id > annonces.length && (
                <div className="btncards">
                  <button
                    className="delete-button"
                    onClick={() => deleteAd(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
              <div className="btncards">
                <button className="message-button">Message</button>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>Browse Categories</li>
                <li>Post an Ad</li>
                <li>Help & Support</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Popular Pages</h3>
              <ul>
                <li>Our Services</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
