import { useState, useEffect } from "react";
import axios from "axios";
import "./manageAds.css";

const ManageAds = () => {
  const [ads, setAds] = useState([]);

  // Fetch ads from API
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("https://api-node-quick-annonce.vercel.app/api/annonces");
        setAds(response.data.articles);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  // Delete ad with confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this ad?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://api-node-quick-annonce.vercel.app/api/annonces/${id}`);
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
    window.location.reload();
  };

  return (
    <div className="manage-ads">
    <br/><br/><br/><br/>
      <table className="ads-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ads.length > 0 ? (
            ads.map((ad) => (
              <tr key={ad._id}>
                <td>
                  <img src={ad.image} alt={ad.title} className="ad-image" />
                </td>
                <td>{ad.title}</td>
                <td>{ad.category}</td>
                <td>${ad.price}</td>
                <td>{ad.city}</td>
                <td>
                  <button onClick={() => handleDelete(ad._id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No ads found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAds;
