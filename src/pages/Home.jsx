import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { ArrowRight, Calendar } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

function Home() {
  const featuredProjects = siteData.projects.slice(0, 3); // Get first 3 projects

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bem-vindo ao <br />
              <span className="text-gradient">{siteData.profile.siteName || siteData.profile.name}</span>
            </h1>
            <p className="hero-subtitle">
              {siteData.profile.headline}
            </p>
            <div className="hero-actions">
              <a href={siteData.profile.social.calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Calendar size={18} /> Agendar Reunião
              </a>
              <Link to="/servicos-e-projetos" className="btn btn-outline">
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="hero-bg-glow glow-1"></div>
        <div className="hero-bg-glow glow-2"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>Projetos em <span className="text-gradient">Destaque</span></h2>
            <Link to="/servicos-e-projetos" className="view-all-link">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
