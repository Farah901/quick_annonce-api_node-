import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import TopNavbar from './TopNavbar';
import PostAd from './PostAd';
import CategoryPage from "./CategoryPage";
import ManageAds from './ManageAds';
import Home from './HomePage';
import About from './About';
import Login from './Login';
import Dashboard from './dashboard';
import AnnonceDetails from './AnnonceDetails';
import AllAnnonces from './AllAnnonces';
import RouteGuard from './RouteGuard'; // Import RouteGuard
import { useDispatch } from 'react-redux';
import { login } from './slices/userSlice';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userToken'));
    if (storedUser) {
      dispatch(login(storedUser)); // Restore user session
    }
  }, [dispatch]);

  return (
    <Router>
      <TopNavbar toggleDarkMode={toggleDarkMode} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postad" element={<PostAd />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/annonces/:id" element={<AnnonceDetails />} />
        <Route path="/all-annonces" element={<AllAnnonces />} />

        {/* Protect admin pages */}
        <Route path="/admin/manage-ads" element={<RouteGuard allowedRole="admin"><ManageAds /></RouteGuard>} />
        <Route path="/admin/dashboard" element={<RouteGuard allowedRole="admin"><Dashboard /></RouteGuard>} />
      </Routes>
    </Router>
  );
};

export default App;
