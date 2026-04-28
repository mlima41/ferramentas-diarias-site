import { siteData } from '../data/content';
import { Linkedin, Youtube, MessageCircle, Calendar } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="text-gradient">{siteData.profile.siteName || siteData.profile.name}</h3>
            <p className="footer-tagline">{siteData.profile.role}</p>
          </div>
          
          <div className="footer-social">
            <a href={siteData.profile.social.calendar} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Agendar Reunião">
              <Calendar size={20} />
            </a>
            <a href={siteData.profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={siteData.profile.social.youtube} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href={siteData.profile.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteData.profile.siteName || siteData.profile.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
