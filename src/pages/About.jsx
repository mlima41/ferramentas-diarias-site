import { siteData } from '../data/content';
import { Linkedin, Youtube, MessageCircle, Calendar } from 'lucide-react';
import './About.css';

function About() {
  const { profile } = siteData;

  return (
    <div className="about-page section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img src={profile.photoUrl} alt={profile.name} className="about-image" />
              <div className="about-image-decor"></div>
            </div>
          </div>
          
          <div className="about-text-column">
            <h1 className="page-title">Sobre <span className="text-gradient">Mim</span></h1>
            <h2 className="about-role">{profile.role}</h2>
            
            <div className="about-bio">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about-actions" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <a href={profile.social.calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor: 'var(--accent-primary)', color: 'white'}}>
                <Calendar size={20} /> Agendar Reunião
              </a>
              <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor: '#25D366', color: 'white', borderColor: '#25D366'}}>
                <MessageCircle size={20} /> Falar no WhatsApp
              </a>
            </div>
            
            <div className="about-social">
              <h3>Minhas Redes</h3>
              <div className="social-buttons">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn linkedin-btn">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn youtube-btn">
                  <Youtube size={20} /> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
