import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { annonces } from "./ManageAds";
import './CategoryPage.css'; // Assurez-vous que le chemin est correct

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = annonces.filter(product => product.category === categoryName);
    console.log("Filtered Products:", filtered); // Vérifiez que les produits filtrés sont corrects
    setFilteredProducts(filtered);
  }, [categoryName]);

  return ( // Ajoutez le return pour afficher le contenu
    <div>
      <h2>{categoryName} Listings</h2>
      <div className="products-section">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><b>Price:</b> {product.price}</p>
                <p><b>City:</b> {product.city}</p>
              </div>
              <div className="btncards">
                <button className="message-button">Message</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
