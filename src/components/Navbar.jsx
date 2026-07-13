import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/content';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="text-gradient">{siteData.profile.siteName || siteData.profile.name}</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/sobre" className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre</Link>
          <Link to="/servicos-e-projetos" className={`nav-link ${location.pathname === '/servicos-e-projetos' ? 'active' : ''}`}>Serviços & Projetos</Link>
          <Link to="/sistema-pcp" className={`nav-link ${location.pathname === '/sistema-pcp' ? 'active' : ''}`}>Sistema PCP</Link>
          <Link to="/materiais-gratuitos" className={`nav-link ${location.pathname === '/materiais-gratuitos' ? 'active' : ''}`}>Materiais Gratuitos</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/sobre" className={`mobile-nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre</Link>
          <Link to="/servicos-e-projetos" className={`mobile-nav-link ${location.pathname === '/servicos-e-projetos' ? 'active' : ''}`}>Serviços & Projetos</Link>
          <Link to="/sistema-pcp" className={`mobile-nav-link ${location.pathname === '/sistema-pcp' ? 'active' : ''}`}>Sistema PCP</Link>
          <Link to="/materiais-gratuitos" className={`mobile-nav-link ${location.pathname === '/materiais-gratuitos' ? 'active' : ''}`}>Materiais Gratuitos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
