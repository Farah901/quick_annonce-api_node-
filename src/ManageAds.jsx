import { useState } from "react";
import "./manageAds.css"
// Liste des produits

export const annonces = [
  // Electronics & Technologies
  {
    title: "Gaming Headphone",
    description: "High-quality sound with noise cancellation.",
    category: "Electronics & Technologies",
    price: "$239.00",
    image: import("./assets/images/gamingphonebg.png"),
    city: "Casablanca",
    id: 1,
    datePoster: "2025-02-01",  // Example date
  },
  {
    title: 'Macbook Pro 13"',
    description: "Powerful 8-core GPU, 8GB RAM, 256GB.",
    category: "Electronics & Technologies",
    price: "$1099.00",
    image: import("./assets/images/mac13bg.png"),
    city: "Rabat",
    id: 2,
    datePoster: "2025-01-25",  // Example date
  },
  {
    title: "Smart TV 4K",
    description: "55-inch UHD display, HDR10+, built-in apps.",
    category: "Electronics & Technologies",
    price: "$699.00",
    image: import("./assets/images/SmartTV4Kbg.png"),
    city: "Marrakech",
    id: 3,
    datePoster: "2025-02-03",  // Example date
  },
  {
    title: "Wireless Earbuds",
    description: "Bluetooth 5.3, noise cancellation, 24h battery.",
    category: "Electronics & Technologies",
    price: "$129.00",
    image: import("./assets/images/WirelessEarbudsbg.png"),
    city: "Tanger",
    id: 4,
    datePoster: "2025-01-20",  // Example date
  },

  // Clothes
  {
    title: "Leather Jacket",
    description: "Genuine leather, stylish and comfortablee.",
    category: "Clothes",
    price: "$149.00",
    image: import("./assets/images/LeatherJacketbg.png"),
    city: "Casablanca",
    id: 5,
    datePoster: "2025-01-15",  // Example date
  },
  {
    title: "Sneakers Nike Air",
    description: "Sporty and comfortable, available in multiple.",
    category: "Clothes",
    price: "$99.00",
    image: import("./assets/images/SneakersNikeAirbg.png"),
    city: "Fès",
    id: 6,
    datePoster: "2025-01-10",  // Example date
  },
  {
    title: "Elegant Dress",
    description: "Perfect for formal occasions, high-quality .",
    category: "Clothes",
    price: "$79.00",
    image: import("./assets/images/ElegantDressbg.png"),
    city: "Meknès",
    id: 7,
    datePoster: "2025-02-05",  // Example date
  },
  {
    title: "Men's Suit",
    description: "Classic black suit, includes jacket and pants.",
    category: "Clothes",
    price: "$199.00",
    image: import("./assets/images/menbg.png"),
    city: "Agadir",
    id: 8,
    datePoster: "2025-02-02",  // Example date
  },

  // Vehicles
  {
    title: "Toyota Corolla 2022",
    description: "Low mileage, excellent condition, automatic.",
    category: "Vehicles",
    price: "$18,500.00",
    image: import("./assets/images/Toyotabg.png"),
    city: "Rabat",
    id: 9,
    datePoster: "2025-01-30",  // Example date
  },
  {
    title: "Yamaha Scooter 125cc",
    description: "Fuel efficient, perfect for city rides lorem eps.",
    category: "Vehicles",
    price: "$2,900.00",
    image: import("./assets/images/YamahaScooter125ccbg.png"),
    city: "Casablanca",
    id: 10,
    datePoster: "2025-02-07",  // Example date
  },
  {
    title: "BMW X5",
    description: "Luxury SUV, full options, low mileage lorem.",
    category: "Vehicles",
    price: "$49,000.00",
    image: import("./assets/images/BMWX5bg.png"),
    city: "Marrakech",
    id: 11,
    datePoster: "2025-01-22",  // Example date
  },
  {
    title: "Electric Bike",
    description: "Eco-friendly, 40km battery range, lightweight.",
    category: "Vehicles",
    price: "$1,200.00",
    image: import("./assets/images/ElectricBikebg.png"),
    city: "Fès",
    id: 12,
    datePoster: "2025-02-04",  // Example date
  },

  // Jobs & Internship
  {
    title: "Web Developer Internship",
    description: "3-month internship, remote work possible.",
    category: "Jobs & Internship",
    price: "Unpaid",
    image: import("./assets/images/WebDeveloperInternship.jpg"),
    city: "Casablanca",
    id: 13,
    datePoster: "2025-01-28",  // Example date
  },
  {
    title: "Marketing Assistant",
    description: "Full-time, experience in digital marketing importd.",
    category: "Jobs & Internship",
    price: "$1,200/month",
    image: import("./assets/images/Marketing.jpg"),
    city: "Rabat",
    id: 14,
    datePoster: "2025-02-06",  // Example date
  },
  {
    title: "Graphic Designer",
    description: "Freelance position, Adobe Suite importd lorem.",
    category: "Jobs & Internship",
    price: "$800/month",
    image: import("./assets/images/GraphicDesigner.jpg"),
    city: "Meknès",
    id: 15,
    datePoster: "2025-02-01",  // Example date
  },
  {
    title: "Customer Service Agent",
    description: "Call center job, bilingual importd,lorem.",
    category: "Jobs & Internship",
    price: "$900/month",
    image: import("./assets/images/Customer.jpg"),
    city: "Agadir",
    id: 16,
    datePoster: "2025-01-17",  // Example date
  },

  // Apartments
  {
    title: "2-Bedroom Apartment",
    description: "Furnished, near city center, spacious, great view.",
    category: "Apartments",
    price: "$750/month",
    image: import("./assets/images/bed.jpg"),
    city: "Casablanca",
    id: 17,
    datePoster: "2025-01-19",  // Example date
  },
  {
    title: "Studio Apartment",
    description: "Compact modern and cozy, ideal for students.",
    category: "Apartments",
    price: "$500/month",
    image: import("./assets/images/StudioApartment.jpg"),
    city: "Rabat",
    id: 18,
    datePoster: "2025-02-03",  // Example date
  },
  {
    title: "Luxury Villa",
    description: "5 bedrooms, swimming pool, private garden.",
    category: "Apartments",
    price: "$3,500/month",
    image: import("./assets/images/LuxuryVilla.jpg"),
    city: "Marrakech",
    id: 19,
    datePoster: "2025-02-08",  // Example date
  },
  {
    title: "Shared Room for Rent",
    description: "Ideal for students, all of utilities included.",
    category: "Apartments",
    price: "$250/month",
    image: import("./assets/images/SharedRoom.jpg"),
    city: "Fès",
    id: 20,
    datePoster: "2025-01-25",  // Example date
  },
];
const ManageAds = () => {
  const [ads, setAds] = useState(annonces);  // Initialisation avec les annonces

  // Fonction pour supprimer une annonce
  const handleDelete = (index) => {
    // Show a confirmation alert before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this ad?");
    if (confirmDelete) {
      const newAds = ads.filter((_, i) => i !== index);  // Delete the ad at the given index
      setAds(newAds);
    }
  };
  

  return (
    <div className="manage-ads">
      <h1>Manage Ads</h1>
      <table className="ads-table">
        <thead>
          <tr>
          <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad, index) => (
            <tr key={index}>
               <td>
                <img src={ad.image} alt={ad.title} className="ad-image" />
              </td>
              <td>{ad.title}</td>
              <td>{ad.description}</td>
              <td>{ad.category}</td>
              <td>{ad.price}</td>
              <td>{ad.city}</td>
              <td>
                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAds;
