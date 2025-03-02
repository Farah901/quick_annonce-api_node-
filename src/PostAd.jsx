import { useState } from 'react';
import './PostAd.css';

const PostAd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    city: '',
    image: null,  // Change images to image (singular)
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,  // Use only the first file if there are multiple files selected
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    formDataObj.append('category', formData.category);
    formDataObj.append('description', formData.description);
    formDataObj.append('price', formData.price);
    formDataObj.append('city', formData.city);

    // Append the image if available
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    try {
      // Send the POST request to the API
      const response = await fetch('https://api-node-quick-annonce.vercel.app/api/annonces', {
        method: 'POST',
        body: formDataObj,
        headers: {
          // Add any headers needed for authentication or content-type
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add the ad');
      }

      // Successfully added the ad
      const result = await response.json();
      alert('Annonce ajoutée avec succès !');
      console.log(result);  // You can also log the response from the API if needed
      setFormData({
        title: '',
        description: '',
        category: '',
        price: '',
        city: '',
        image: null,
      });  // Reset the form after success

    } catch (error) {
      console.error('Error adding annonce:', error);
      alert('Une erreur est survenue, veuillez réessayer plus tard.');
    }
  };

  return (
  <>
    <div className="form-container">
      <p className='titrer'>Ajouter une Annonce</p>
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
          <label htmlFor="price">Prix ($):</label>
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
            <option value="Fez">Fez</option>
            <option value="Tangier">Tangier</option>
            <option value="Agadir">Agadir</option>
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
          <label htmlFor="image">Image:</label> {/* Changed images to image */}
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Ajouter l'Annonce</button>
      </form>
    </div></>
  );
};

export default PostAd;
