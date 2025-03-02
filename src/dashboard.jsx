import { useEffect, useState } from "react";
import Navbar from "./navbar";
import TopNavbar from "./TopNavbar";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    // Fetch annonces data from the API
    axios
      .get("https://api-node-quick-annonce.vercel.app/api/annonces")
      .then((response) => {
        setAnnonces(response.data.articles); // Set the fetched annonces data in the state
      })
      .catch((error) => {
        console.error("Error fetching annonces:", error);
      });
  }, []);

  // Calcul des statistiques
  const annoncesParMois = annonces.reduce((acc, annonce) => {
    const mois = new Date(annonce.created_at).getMonth() + 1;
    acc[mois] = (acc[mois] || 0) + 1;
    return acc;
  }, {});

  const annoncesParCategorie = annonces.reduce((acc, annonce) => {
    acc[annonce.category] = (acc[annonce.category] || 0) + 1;
    return acc;
  }, {});

  const annoncesParVille = annonces.reduce((acc, annonce) => {
    acc[annonce.city] = (acc[annonce.city] || 0) + 1;
    return acc;
  }, {});

  // Données pour les graphiques
  const dataBar = {
    labels: Object.keys(annoncesParMois),
    datasets: [
      {
        label: "Nombre d'annonces par mois",
        data: Object.values(annoncesParMois),
        backgroundColor: "rgba(179, 226, 116, 0.6)",
        borderColor: "rgba(22, 22, 22, 0.39)",
        borderWidth: 1,
      },
    ],
  };

  const dataPieCategorie = {
    labels: Object.keys(annoncesParCategorie),
    datasets: [
      {
        data: Object.values(annoncesParCategorie),
        backgroundColor: [
          "#f09027",
          "#295f4e",
          "#a9c52f",
          "#faffb8",
          "#83afa6",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const dataPieVille = {
    labels: Object.keys(annoncesParVille),
    datasets: [
      {
        data: Object.values(annoncesParVille),
        backgroundColor: [
          "#c94c4c",
          "#94ac3c",
          "#f09027",
          "#83afa6",
          "#dde0ab",
          "#295f4e",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <TopNavbar />
      <Navbar />
      <br />
      <br />
      <br />
      <div className="charts-container">
        <div className="chart">
          <h3>Number of Ads Per Month</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Bar
            data={dataBar}
            options={{
              responsive: true,
              plugins: { title: { display: true, text: "Ads per Month" } },
            }}
          />
        </div>

        <div className="chart">
          <h3>Number of Ads Per Category</h3>
          <Pie
            data={dataPieCategorie}
            options={{
              responsive: true,
              plugins: { title: { display: true, text: "Ads per Category" } },
            }}
          />
        </div>

        <div className="chart">
          <h3>Number of Ads Per City</h3>
          <Pie
            data={dataPieVille}
            options={{
              responsive: true,
              plugins: { title: { display: true, text: "Ads per City" } },
            }}
          />
        </div>
      </div>
      <style>
        {`.dashboard-container {
    margin: 30px;
    padding: 20px;
    background-color: #f7f9f4;
    border-radius: 8px;
    margin-top: 30px;
  }
  
  .charts-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  .chart {
    flex: 1 1 20%; /* Réduit la largeur des graphiques */
    max-width: 500px; /* Taille maximale du graphique */
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .chart h3 {
    text-align: center;
    margin-bottom: 10px; /* Réduit l'espace autour du titre */
  }
  
  @media (max-width: 768px) {
    .chart {
      flex: 1 1 45%; /* Permet à deux graphiques de se mettre côte à côte sur les écrans plus petits */
      max-width: 250px; /* Réduit encore la taille sur les petits écrans */
    }
  }
  
  @media (max-width: 480px) {
    .chart {
      flex: 1 1 100%; /* Les graphiques prennent toute la largeur sur les petits écrans */
      max-width: 200px; /* Taille encore plus petite sur les très petits écrans */
    }
  }`}
      </style>
    </div>
  );
};
export default Dashboard;
