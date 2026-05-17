import { useState } from 'react';
import { ExternalLink, Play, X, ChevronDown, ChevronUp } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasVideo = !!project.videoUrl;

  const defaultImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const imageUrl = project.imageUrl || defaultImage;

  return (
    <>
      <div className="project-card glass">
        <div 
          className={`project-image-container ${hasVideo ? 'clickable' : ''}`}
          onClick={() => hasVideo && setIsModalOpen(true)}
        >
          <img src={imageUrl} alt={project.title} className="project-image" loading="lazy" />
          {hasVideo && (
            <div className="play-overlay">
              <Play size={48} className="play-icon" />
            </div>
          )}
        </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-short-desc" style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '0.95rem' }}>
          {project.shortDescription}
        </p>

        {(project.demoUrl || project.videoUrl) && (
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                <ExternalLink size={16} /> Acessar Versão Demo
              </a>
            )}
            {project.videoUrl && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}
              >
                <Play size={16} /> Assistir Demonstração
              </button>
            )}
          </div>
        )}

        <button 
          type="button"
          className="btn-expand" 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0', marginBottom: isExpanded ? '1rem' : 'auto', fontWeight: '600', fontSize: '0.9rem' }}
        >
          {isExpanded ? (
            <><ChevronUp size={16} /> Ocultar Detalhes</>
          ) : (
            <><ChevronDown size={16} /> Ver Detalhes do Projeto</>
          )}
        </button>

        {isExpanded && (
          <div className="project-desc-expanded" style={{ marginBottom: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
            {project.description.split('\n').map((line, index) => (
              <p key={index} style={{ marginBottom: line.trim() === '' ? '0' : '0.5rem', minHeight: line.trim() === '' ? '0.5rem' : 'auto', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {line}
              </p>
            ))}
          </div>
        )}
        
        <div className="project-tech" style={{ marginTop: isExpanded ? '0' : 'auto' }}>
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>

      {isModalOpen && hasVideo && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="modal-video-wrapper">
              <iframe 
                src={project.videoUrl} 
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
