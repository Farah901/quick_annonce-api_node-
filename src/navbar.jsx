import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './slices/userSlice';
 // Import du logo
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="assets/images/logo2.png" alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className={`menu-items ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="menu-link">About</Link>
          </li>
          
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login" className="menu-link">Login</Link>
              </li>
              <li>
                {/* <Link to="/ContactForm" className="menu-link">Contact Us</Link> */}
              </li>
            </>
          ) : role === 'user' ? (
            <>
              <li>
                <Link to="/postad" className="menu-link">Post Ad</Link>
              </li>
              <li>
                <button className="menu-link logout-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : role === 'admin' ? (
            <>
              <li>
                <Link to="/admin/dashboard" className="menu-link">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/manage-ads" className="menu-link">Manage Ads</Link>
              </li>
              <li>
                <button className="menu-link logout-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : null}
        </ul>

        {/* Mobile Menu Button */}
        <button className="burger-button" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
