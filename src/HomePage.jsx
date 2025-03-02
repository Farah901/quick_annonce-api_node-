import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

// Import images statically at the top of the file
import appipiImage from './assets/images/appipi.jpg';
import clothessseImage from './assets/images/clothessse.jpg';
import electronicsImage from './assets/images/electronics.jpg';
import jobbbsImage from './assets/images/jobbbs.jpg';
import vihiclesImage from './assets/images/vihicles.jpg';

const categories = [
  {
    name: "Apartment",
    image: appipiImage,
    path: "/category/Apartments",
  },
  {
    name: "Clothes",
    image: clothessseImage,
    path: "/category/Clothes",
  },
  {
    name: "Electronics & Technologies",
    image: electronicsImage,
    path: "/category/Electronics & Technologies",
  },
  {
    name: "Jobs & Internship",
    image: jobbbsImage,
    path: "/category/Jobs & Internship",
  },
  {
    name: "Vehicles",
    image: vihiclesImage,
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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from local API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api-node-quick-annonce.vercel.app/api/annonces"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.articles || data); // Adjust based on API response structure
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category and city
  const filteredProducts = products
    .filter((product) => {
      return (
        (selectedCategory === "All Categories" ||
          product.category === selectedCategory) &&
        (selectedCity === "All Cities" || product.city === selectedCity)
      );
    })
    .slice(0, 8); // Limit to 8 products

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCardClick = (id) => {
    navigate(`/annonces/${id}`);
  };

  return (
    <div className="all">
      <div className="home-container">
        <div className="home-content">
          <div className="text-container">
            <h2 className="tit">{t("title")}</h2>
            <button className="buy-button">{t("buyNow")}</button>
          </div>
        </div>

        <div className="info-section">
          <h2>{t("welcome")}</h2>
          <p>{t("description")}</p>
          <button
            className="post-ad-button"
            onClick={() => {
              const user = localStorage.getItem("user");

              if (user) {
                navigate("/postad");
              } else {
                navigate("/login");
              }
            }}
          >
            <b>{t("postAd")}</b>
          </button>
        </div>

        {/* Section catégories */}
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() =>
                navigate(`/category/${category.name.toLowerCase()}`)
              }
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

        {/* Filters Section */}
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

        {/* Section produits */}
        <div className="products-section">
          {filteredProducts.map((product, index) => (
            <div
              key={product._id || index} // Use _id if present
              className="annonce-card"
              onClick={() => handleCardClick(product._id)}
            >
              <div className="product-card">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>
                    <b style={{ color: "red", fontSize: "1.2em" }}>Price:</b>{" "}
                    {product.price} $
                  </p>
                </div>
                <div className="btncards">
                  <button className="message-button">Message</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => navigate("/all-annonces")}
          >
            View All Annonces
          </button>
        </div><br /><br />

        {/* Footer */}
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
              <h3>Legal</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
