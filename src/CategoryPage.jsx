import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category from URL
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(`https://api-node-quick-annonce.vercel.app/api/annonces`);
        const data = await response.json();
        setAds(data.articles);

        // Filter ads based on category (case insensitive)
        const filtered = data.articles.filter(
          (ad) => ad.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredAds(filtered);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [categoryName]); // Re-fetch when category changes

  if (loading) return <p>Loading ads...</p>;

  return (
    <div>
      <br /><br /><br /><br /><br /><br/>
      <h1>{categoryName.toUpperCase()}</h1>

      <div className="products-section">
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => (
            <div
              key={ad.id}
              className="annonce-card"
            >
              <div className="product-card">
                <div className="image-container">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3>{ad.title}</h3>
                  <p>
                    <b style={{ color: "red", fontSize: "1.2em" }}>Price:</b>{" "}
                    {ad.price} $
                  </p>
                </div>
                <div className="btncards">
                  <button className="message-button">Message</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No ads found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
