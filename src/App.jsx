import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Assurez-vous que le chemin est correct pour votre projet
import TopNavbar from './TopNavbar';
import PostAd from './PostAd';
import CategoryPage from "./CategoryPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import ManageAds from './ManageAds';
// Composants pour les pages
import Home from './HomePage';
import About from './About';
import Login from './Login';
import Dashboard from './dashboard';



const App = () => {
  // Gérer l'état du mode sombre dans le composant parent
  const [darkMode, setDarkMode] = useState(false);

  // Toggle pour changer le mode sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <TopNavbar toggleDarkMode={toggleDarkMode} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postad" element={<PostAd />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/admin/manage-ads" element={<ManageAds />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
       
        
      </Routes>
    </Router>
  );
};

export default App;
