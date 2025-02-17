import { useState } from "react";
import "./manageAds.css";

// Static imports for images
import gamingphonebg from "./assets/images/gamingphonebg.png";
import mac13bg from "./assets/images/mac13bg.png";
import SmartTV4Kbg from "./assets/images/SmartTV4Kbg.png";
import WirelessEarbudsbg from "./assets/images/WirelessEarbudsbg.png";
import LeatherJacketbg from "./assets/images/LeatherJacketbg.png";
import SneakersNikeAirbg from "./assets/images/SneakersNikeAirbg.png";
import ElegantDressbg from "./assets/images/ElegantDressbg.png";
import menbg from "./assets/images/menbg.png";
import Toyotabg from "./assets/images/Toyotabg.png";
import YamahaScooter125ccbg from "./assets/images/YamahaScooter125ccbg.png";
import BMWX5bg from "./assets/images/BMWX5bg.png";
import ElectricBikebg from "./assets/images/ElectricBikebg.png";
import WebDeveloperInternship from "./assets/images/WebDeveloperInternship.jpg";
import Marketing from "./assets/images/Marketing.jpg";
import GraphicDesigner from "./assets/images/GraphicDesigner.jpg";
import Customer from "./assets/images/Customer.jpg";
import bed from "./assets/images/bed.jpg";
import StudioApartment from "./assets/images/StudioApartment.jpg";
import LuxuryVilla from "./assets/images/LuxuryVilla.jpg";
import SharedRoom from "./assets/images/SharedRoom.jpg";

// Liste des produits
export const annonces = [
  // Electronics & Technologies
  {
    title: "Gaming Headphone",
    description: "High-quality sound with noise cancellation.",
    category: "Electronics & Technologies",
    price: "$239.00",
    image: gamingphonebg,
    city: "Casablanca",
    id: 1,
    datePoster: "2025-02-01", // Example date
  },
  {
    title: 'Macbook Pro 13"',
    description: "Powerful 8-core GPU, 8GB RAM, 256GB.",
    category: "Electronics & Technologies",
    price: "$1099.00",
    image: mac13bg,
    city: "Rabat",
    id: 2,
    datePoster: "2025-01-25", // Example date
  },
  {
    title: "Smart TV 4K",
    description: "55-inch UHD display, HDR10+, built-in apps.",
    category: "Electronics & Technologies",
    price: "$699.00",
    image: SmartTV4Kbg,
    city: "Marrakech",
    id: 3,
    datePoster: "2025-02-03", // Example date
  },
  {
    title: "Wireless Earbuds",
    description: "Bluetooth 5.3, noise cancellation, 24h battery.",
    category: "Electronics & Technologies",
    price: "$129.00",
    image: WirelessEarbudsbg,
    city: "Tanger",
    id: 4,
    datePoster: "2025-01-20", // Example date
  },

  // Clothes
  {
    title: "Leather Jacket",
    description: "Genuine leather, stylish and comfortable.",
    category: "Clothes",
    price: "$149.00",
    image: LeatherJacketbg,
    city: "Casablanca",
    id: 5,
    datePoster: "2025-01-15", // Example date
  },
  {
    title: "Sneakers Nike Air",
    description: "Sporty and comfortable, available in multiple sizes.",
    category: "Clothes",
    price: "$99.00",
    image: SneakersNikeAirbg,
    city: "Fès",
    id: 6,
    datePoster: "2025-01-10", // Example date
  },
  {
    title: "Elegant Dress",
    description: "Perfect for formal occasions, high-quality fabric.",
    category: "Clothes",
    price: "$79.00",
    image: ElegantDressbg,
    city: "Meknès",
    id: 7,
    datePoster: "2025-02-05", // Example date
  },
  {
    title: "Men's Suit",
    description: "Classic black suit, includes jacket and pants.",
    category: "Clothes",
    price: "$199.00",
    image: menbg,
    city: "Agadir",
    id: 8,
    datePoster: "2025-02-02", // Example date
  },

  // Vehicles
  {
    title: "Toyota Corolla 2022",
    description: "Low mileage, excellent condition, automatic.",
    category: "Vehicles",
    price: "$18,500.00",
    image: Toyotabg,
    city: "Rabat",
    id: 9,
    datePoster: "2025-01-30", // Example date
  },
  {
    title: "Yamaha Scooter 125cc",
    description: "Fuel efficient, perfect for city rides.",
    category: "Vehicles",
    price: "$2,900.00",
    image: YamahaScooter125ccbg,
    city: "Casablanca",
    id: 10,
    datePoster: "2025-02-07", // Example date
  },
  {
    title: "BMW X5",
    description: "Luxury SUV, full options, low mileage.",
    category: "Vehicles",
    price: "$49,000.00",
    image: BMWX5bg,
    city: "Marrakech",
    id: 11,
    datePoster: "2025-01-22", // Example date
  },
  {
    title: "Electric Bike",
    description: "Eco-friendly, 40km battery range, lightweight.",
    category: "Vehicles",
    price: "$1,200.00",
    image: ElectricBikebg,
    city: "Fès",
    id: 12,
    datePoster: "2025-02-04", // Example date
  },

  // Jobs & Internship
  {
    title: "Web Developer Internship",
    description: "3-month internship, remote work possible.",
    category: "Jobs & Internship",
    price: "Unpaid",
    image: WebDeveloperInternship,
    city: "Casablanca",
    id: 13,
    datePoster: "2025-01-28", // Example date
  },
  {
    title: "Marketing Assistant",
    description: "Full-time, experience in digital marketing required.",
    category: "Jobs & Internship",
    price: "$1,200/month",
    image: Marketing,
    city: "Rabat",
    id: 14,
    datePoster: "2025-02-06", // Example date
  },
  {
    title: "Graphic Designer",
    description: "Freelance position, Adobe Suite experience required.",
    category: "Jobs & Internship",
    price: "$800/month",
    image: GraphicDesigner,
    city: "Meknès",
    id: 15,
    datePoster: "2025-02-01", // Example date
  },
  {
    title: "Customer Service Agent",
    description: "Call center job, bilingual preferred.",
    category: "Jobs & Internship",
    price: "$900/month",
    image: Customer,
    city: "Agadir",
    id: 16,
    datePoster: "2025-01-17", // Example date
  },

  // Apartments
  {
    title: "2-Bedroom Apartment",
    description: "Furnished, near city center, spacious, great view.",
    category: "Apartments",
    price: "$750/month",
    image: bed,
    city: "Casablanca",
    id: 17,
    datePoster: "2025-01-19", // Example date
  },
  {
    title: "Studio Apartment",
    description: "Compact modern and cozy, ideal for students.",
    category: "Apartments",
    price: "$500/month",
    image: StudioApartment,
    city: "Rabat",
    id: 18,
    datePoster: "2025-02-03", // Example date
  },
  {
    title: "Luxury Villa",
    description: "5 bedrooms, swimming pool, private garden.",
    category: "Apartments",
    price: "$3,500/month",
    image: LuxuryVilla,
    city: "Marrakech",
    id: 19,
    datePoster: "2025-02-08", // Example date
  },
  {
    title: "Shared Room for Rent",
    description: "Ideal for students, all utilities included.",
    category: "Apartments",
    price: "$250/month",
    image: SharedRoom,
    city: "Fès",
    id: 20,
    datePoster: "2025-01-25", // Example date
  },
];

// The rest of your component remains the same...

const ManageAds = () => {
  const [ads, setAds] = useState(annonces);  // Initialisation avec les annonces

  // Fonction pour supprimer une annonce
  const handleDelete = (index) => {
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
                <button onClick={() => handleDelete(index)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAds;
