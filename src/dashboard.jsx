import { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';
import './dashboard.css';

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

// Déplacer products ici pour qu'il soit accessible partout
const annonces = [
  {
    title: "Gaming Headphone",
    description: "High-quality sound with noise cancellation.",
    category: "Electronics & Technologies",
    price: "$239.00",
    image: import("./assets/images/gamingphone.jpg"),
    city: "Casablanca",
    id: 1,
    datePoster: "2025-02-01",
  },
  {
    title: 'Macbook Pro 13"',
    description: "Powerful 8-core GPU, 8GB RAM, 256GB.",
    category: "Electronics & Technologies",
    price: "$1099.00",
    image: import("./assets/images/mac13.jpg"),
    city: "Rabat",
    id: 2,
    datePoster: "2025-02-25",
  },

  {
    title: "Smart TV 4K",
    description: "55-inch UHD display, HDR10+, built-in apps.",
    category: "Electronics & Technologies",
    price: "$699.00",
    image: import("./assets/images/SmartTV4K.jpg"),
    city: "Marrakech",
    id: 3,
    datePoster: "2025-03-03",  // Example date
  },
  {
    title: "Wireless Earbuds",
    description: "Bluetooth 5.3, noise cancellation, 24h battery life.",
    category: "Electronics & Technologies",
    price: "$129.00",
    image: import("./assets/images/WirelessEarbuds.jpg"),
    city: "Tanger",
    id: 4,
    datePoster: "2025-04-20",  // Example date
  },

  // Clothes
  {
    title: "Leather Jacket",
    description: "Genuine leather, stylish and comfortable.",
    category: "Clothes",
    price: "$149.00",
    image: import("./assets/images/LeatherJacket.jpg"),
    city: "Casablanca",
    id: 5,
    datePoster: "2025-05-15",  // Example date
  },
  {
    title: "Sneakers Nike Air",
    description: "Sporty and comfortable, available in multiple sizes.",
    category: "Clothes",
    price: "$99.00",
    image: import("./assets/images/SneakersNikeAir.jpg"),
    city: "Fès",
    id: 6,
    datePoster: "2025-04-10",  // Example date
  },
  {
    title: "Elegant Dress",
    description: "Perfect for formal occasions, high-quality fabric.",
    category: "Clothes",
    price: "$79.00",
    image: import("./assets/images/ElegantDress.jpg"),
    city: "Meknès",
    id: 7,
    datePoster: "2025-05-05",  // Example date
  },
  {
    title: "Men's Suit",
    description: "Classic black suit, includes jacket and pants.",
    category: "Clothes",
    price: "$199.00",
    image: import("./assets/images/men.jpg"),
    city: "Agadir",
    id: 8,
    datePoster: "2025-04-02",  // Example date
  },

  // Vehicles
  {
    title: "Toyota Corolla 2022",
    description: "Low mileage, excellent condition, automatic.",
    category: "Vehicles",
    price: "$18,500.00",
    image: import("./assets/images/Toyota.jpg"),
    city: "Rabat",
    id: 9,
    datePoster: "2025-05-30",  // Example date
  },
  {
    title: "Yamaha Scooter 125cc",
    description: "Fuel efficient, perfect for city rides.",
    category: "Vehicles",
    price: "$2,900.00",
    image: import("./assets/images/YamahaScooter125cc.jpg"),
    city: "Casablanca",
    id: 10,
    datePoster: "2025-02-07",  // Example date
  },
  {
    title: "BMW X5",
    description: "Luxury SUV, full options, low mileage.",
    category: "Vehicles",
    price: "$49,000.00",
    image: import("./assets/images/BMWX5.jpg"),
    city: "Marrakech",
    id: 11,
    datePoster: "2025-05-22",  // Example date
  },
  {
    title: "Electric Bike",
    description: "Eco-friendly, 40km battery range, lightweight.",
    category: "Vehicles",
    price: "$1,200.00",
    image: import("./assets/images/ElectricBike.jpg"),
    city: "Fès",
    id: 12,
    datePoster: "2025-06-04",  // Example date
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
    datePoster: "2025-06-28",  // Example date
  },
  {
    title: "Marketing Assistant",
    description: "Full-time, experience in digital marketing required.",
    category: "Jobs & Internship",
    price: "$1,200/month",
    image: import("./assets/images/Marketing.jpg"),
    city: "Rabat",
    id: 14,
    datePoster: "2025-02-06",  // Example date
  },
  {
    title: "Graphic Designer",
    description: "Freelance position, Adobe Suite required.",
    category: "Jobs & Internship",
    price: "$800/month",
    image: import("./assets/images/GraphicDesigner.jpg"),
    city: "Meknès",
    id: 15,
    datePoster: "2025-02-01",  // Example date
  },
  {
    title: "Customer Service Agent",
    description: "Call center job, bilingual required.",
    category: "Jobs & Internship",
    price: "$900/month",
    image: import("./assets/images/Customer.jpg"),
    city: "Agadir",
    id: 16,
    datePoster: "2025-05-17",  // Example date
  },

  // Apartments
  {
    title: "2-Bedroom Apartment",
    description: "Furnished, near city center, great view.",
    category: "Apartments",
    price: "$750/month",
    image: import("./assets/images/bed.jpg"),
    city: "Casablanca",
    id: 17,
    datePoster: "2025-01-19",  // Example date
  },
  {
    title: "Studio Apartment",
    description: "Compact and cozy, ideal for students.",
    category: "Apartments",
    price: "$500/month",
    image: import("./assets/images/StudioApartment.jpg"),
    city: "Rabat",
    id: 18,
    datePoster: "2025-04-03",  // Example date
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
    description: "Ideal for students, all utilities included.",
    category: "Apartments",
    price: "$250/month",
    image: import("./assets/images/SharedRoom.jpg"),
    city: "Fès",
    id: 20,
    datePoster: "2025-01-25",  // Example date
  },
  // Ajoute le reste des produits ici...
];

const Dashboard = () => {
  const [ads, setAds] = useState([...annonces]);

  useEffect(() => {
    localStorage.removeItem('ads');
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    setAds(storedAds.length ? storedAds : annonces); // Charge les annonces depuis localStorage ou les produits par défaut
    console.log(storedAds.length ? storedAds : annonces); // Vérifiez ici si les annonces sont bien récupérées
  }, []);
  

  // 1. Nombre d'annonces publiées par mois
  const adsPerMonth = ads.reduce((acc, ad) => {
    const month = new Date(ad.datePoster).getMonth() + 1;
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const adsPerMonthData = {
    labels: Object.keys(adsPerMonth).map((month) => `Month ${month}`),
    datasets: [
      {
        label: 'Number of Ads Per Month',
        data: Object.values(adsPerMonth),
        backgroundColor: 'rgba(179, 226, 116, 0.6)',
      },
    ],
  };

  // 2. Nombre d'annonces par catégorie
  const adsPerCategory = ads.reduce((acc, ad) => {
    acc[ad.category] = (acc[ad.category] || 0) + 1;
    return acc;
  }, {});
  
  console.log(adsPerCategory); // Vérifiez ici les catégories pour voir si elles sont correctement comptées
  

  const adsPerCategoryData = {
    labels: Object.keys(adsPerCategory),
    datasets: [
      {
        data: Object.values(adsPerCategory),
        backgroundColor: ['#f09027', '#295f4e', '#a9c52f', '#faffb8', '#83afa6'],
      },
    ],
  };

  // 3. Nombre d'annonces par ville
  const adsPerCity = ads.reduce((acc, ad) => {
    acc[ad.city] = (acc[ad.city] || 0) + 1;
    return acc;
  }, {});

  const adsPerCityData = {
    labels: Object.keys(adsPerCity),
    datasets: [
      {
        data: Object.values(adsPerCity),
        backgroundColor: ['#94ac3c', '#f09027', '#83afa6', '#dde0ab', '#295f4e'],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="charts-container">
        <div className="chart">
          <h3>Number of Ads Per Month</h3>
          <Bar
            data={adsPerMonthData}
            options={{ responsive: true, plugins: { title: { display: true, text: 'Ads per Month' } } }}
          />
        </div>

        <div className="chart">
          <h3>Number of Ads Per Category</h3>
          <Pie
            data={adsPerCategoryData}
            options={{ responsive: true, plugins: { title: { display: true, text: 'Ads per Category' } } }}
          />
        </div>

        <div className="chart">
          <h3>Number of Ads Per City</h3>
          <Pie
            data={adsPerCityData}
            options={{ responsive: true, plugins: { title: { display: true, text: 'Ads per City' } } }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
