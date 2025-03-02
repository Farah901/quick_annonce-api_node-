import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "./HomePage";
export default function AnnonceDetails() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api-node-quick-annonce.vercel.app/api/annonces/${id}`)
      .then((response) => response.json())
      .then((data) => setAnnonce(data))
      .catch((error) => console.error("Error fetching annonce:", error));
  }, [id]);

  const closeOverlay = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <Home />
      {isOpen && annonce && (
        <div className="detail-overlay">
          <div className="detail-card">
            <button className="detail-close-btn" onClick={closeOverlay}>
              x
            </button>
            <div className="detail-image-container">
              <img src={annonce.image} alt={annonce.title} />
            </div>
            <div className="detail-content">
              <h1 style={{textAlign:'center'}} className="detail-title">
                {annonce.title}
              </h1>
              <p className="detail-description">{annonce.description}</p>
              <div className="detail-footer">
                <p className="detail-price">${annonce.price}</p>
                <button className="detail-message-btn">Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`/* Full-screen overlay */
.detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Card container */
.detail-card {
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Image container */
.detail-image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-image-container img {
  object-fit: cover;
}

/* Content area */
.detail-content {
  padding: 20px;
}

.detail-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.detail-description {
  font-size: 16px;
  color: #444;
  margin-bottom: 15px;
}

/* Footer area */
.detail-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.detail-price {
  font-size: 18px;
  font-weight: bold;
  color: #28a745;
}

.detail-message-btn {
  background-color: #ff7043;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.detail-message-btn:hover {
  background-color:rgb(216, 94, 56);
}

/* Close button */
.detail-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.detail-close-btn:hover {
  color: #000;
}`}
      </style>
    </>
  );
}
