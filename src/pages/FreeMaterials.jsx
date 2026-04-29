import { siteData } from '../data/content';
import MaterialCard from '../components/MaterialCard';
import './FreeMaterials.css';

function FreeMaterials() {
  const { freeMaterials } = siteData;

  return (
    <div className="materials-page">
      <section className="section materials-header">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">Materiais <span className="text-gradient">Gratuitos</span></h1>
            <p className="page-subtitle">
              Uma seleção de planilhas, e-books e ferramentas exclusivas desenvolvidas para facilitar a gestão e a operação do seu negócio. Faça o download e comece a usar agora mesmo!
            </p>
          </div>
        </div>
      </section>

      <section className="section materials-grid-section">
        <div className="container">
          {freeMaterials && freeMaterials.length > 0 ? (
            <div className="materials-grid">
              {freeMaterials.map(material => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>Nenhum material gratuito disponível no momento. Volte em breve!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default FreeMaterials;
