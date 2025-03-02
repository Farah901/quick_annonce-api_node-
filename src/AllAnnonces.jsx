import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllAnnonces = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api-node-quick-annonce.vercel.app/api/annonces/filter?")
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  }, []);

  return (
    <div className="all-annonces-container"><br/><br/><br/><br/><br/>
      <h1 style={{textAlign:'center'}}>All Annonces</h1>
      <div className="products-section">
        {articles.map((article, index) => (
            <div key={index} className="product-card">
              <div className="image-container">
                <img src={article.image} alt={article.title} className="product-image" />
              </div>
              <div className="product-info">
                <h3>{article.title}</h3>
                <p><b style={{color:'red', fontSize:'1,2em'}}>Price:</b> {article.price} $</p>
              </div>
              <div className="btncards">
                <button className="message-button">Message</button>
              </div>
            </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="back-home-container">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
      <style>
        {`
.back-home-container {
  display: flex;
  justify-content: center;
  margin: auto;

}

.back-home-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-home-btn:hover {
  background-color: #218838;
}
`}
      </style>
    </div>
  );
};

export default AllAnnonces;
