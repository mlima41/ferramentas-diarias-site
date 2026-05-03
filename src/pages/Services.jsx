import { siteData } from '../data/content';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Meus <span className="text-gradient">Serviços</span> & <span className="text-gradient">Projetos</span></h1>
          <p className="page-subtitle">
            Conheça as soluções que ofereço e veja exemplos práticos de projetos já realizados.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Como posso ajudar?</h2>
          <div className="services-grid">
            {siteData.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title">Sistemas e Aplicações</h2>
          <div className="projects-grid-full">
            {siteData.projects.filter(p => p.category === 'sistemas').map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '5rem' }}>Projetos de Dados Power BI</h2>
          <div className="projects-grid-full">
            {siteData.projects.filter(p => p.category === 'dados').map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
