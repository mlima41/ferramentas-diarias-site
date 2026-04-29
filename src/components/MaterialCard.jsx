import { useState } from 'react';
import { Download, Play, X } from 'lucide-react';
import './MaterialCard.css';

function MaterialCard({ material }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasVideo = !!material.videoUrl;

  const defaultImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const imageUrl = material.imageUrl || defaultImage;

  return (
    <>
      <div className="material-card glass">
        <div 
          className={`material-image-container ${hasVideo ? 'clickable' : ''}`}
          onClick={() => hasVideo && setIsModalOpen(true)}
        >
          <img src={imageUrl} alt={material.title} className="material-image" loading="lazy" />
          {hasVideo && (
            <div className="play-overlay">
              <Play size={48} className="play-icon" />
            </div>
          )}
          <span className="material-category-badge">{material.category}</span>
        </div>
      
        <div className="material-content">
          <h3 className="material-title">{material.title}</h3>
          <p className="material-desc">
            {material.shortDescription}
          </p>

          <div className="material-actions">
            {material.downloadUrl && (
              <a 
                href={material.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-download" 
              >
                <Download size={18} /> Baixar Material
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && hasVideo && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="modal-video-wrapper">
              <iframe 
                src={material.videoUrl} 
                title={material.title}
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

export default MaterialCard;
