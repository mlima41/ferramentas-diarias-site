import * as Icons from 'lucide-react';
import './ServiceCard.css';

function ServiceCard({ service }) {
  // Dynamically render icon from lucide-react based on string name
  const IconComponent = Icons[service.icon] || Icons.Code;

  return (
    <div className="service-card glass">
      <div className="service-icon-wrapper">
        <IconComponent size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
