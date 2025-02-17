import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostAd.css";

const PostAd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    city: "",
    images: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAds = JSON.parse(localStorage.getItem("ads")) || [];

    const newAd = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      price: `$${formData.price}`,
      city: formData.city,
      image: formData.images ? URL.createObjectURL(formData.images[0]) : null,
    };

    const updatedAds = [...existingAds, newAd];
    localStorage.setItem("ads", JSON.stringify(updatedAds));

    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      city: "",
      images: null,
    });

    alert("Annonce ajoutée avec succès !");
    navigate("/"); // Rediriger vers Home après ajout
  };

  return (
    <div className="form-container">
      <p className="titrer">Ajouter une Annonce</p>
      <form onSubmit={handleSubmit} className="post-ad-form">
        <div className="form-group">
          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Titre de l'annonce"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie:</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Sélectionnez une catégorie</option>
            <option value="Electronics & Technologies">Electronics & Technologies</option>
            <option value="Clothes">Clothes</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Jobs & Internship">Jobs & Internship</option>
            <option value="Apartments">Apartments</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix (DH):</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Prix"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Ville:</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange} required>
            <option value="">Sélectionnez une ville</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Fez">Fès</option>
            <option value="Tangier">Tangier</option>
            <option value="Agadir">Agadir</option>
            <option value="Agadir">Meknès</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description de l'annonce"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Image(s):</label>
          <input type="file" id="images" name="images" onChange={handleChange} multiple />
        </div>

        <button type="submit" className="submit-btn">Ajouter l`Annonce</button>
      </form>
    </div>
  );
};

export default PostAd;
