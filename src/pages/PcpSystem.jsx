import { useState } from 'react';
import { 
  ShoppingCart, 
  Layers, 
  Cpu, 
  Package, 
  Truck, 
  BarChart3, 
  ExternalLink, 
  Calendar, 
  MessageSquare, 
  Info, 
  Play, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { siteData } from '../data/content';
import './PcpSystem.css';

function PcpSystem() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      title: "Comercial (Vendas)",
      description: "Entrada e gestão de pedidos de venda que alimentam diretamente a demanda da fábrica.",
      icon: ShoppingCart,
      color: "#0a66c2"
    },
    {
      title: "Engenharia (BOM)",
      description: "Cadastro e manutenção detalhada da estrutura de produtos (Bill of Materials) para planejamento preciso.",
      icon: Layers,
      color: "#2563eb"
    },
    {
      title: "PCP (MRP & Produção)",
      description: "Cálculo automático de necessidades de materiais, controle de estoque de segurança, abertura de OPs e apontamento em tempo real.",
      icon: Cpu,
      color: "#16a34a"
    },
    {
      title: "Estoque & Lotes",
      description: "Controle consolidado de saldos, rastreabilidade completa por lotes e movimentações de entrada e saída.",
      icon: Package,
      color: "#ea580c"
    },
    {
      title: "Compras & Suprimentos",
      description: "Geração automática de sugestões e pedidos de compras com base nas necessidades identificadas pelo MRP.",
      icon: Truck,
      color: "#7c3aed"
    },
    {
      title: "Dashboard Gerencial",
      description: "Indicadores de produção, gargalos, lead times, eficiência operacional e desempenho das entregas em tempo real.",
      icon: BarChart3,
      color: "#db2777"
    }
  ];

  const galleryItems = [
    {
      title: "Cadastro e Engenharia",
      desc: "Estruturação detalhada de itens, matérias-primas e produtos acabados com árvore de estrutura (BOM).",
      img: "/pcp-system/imagem1.png"
    },
    {
      title: "Planejamento (MRP)",
      desc: "Módulo inteligente para cálculo automático das necessidades de compras e ordens de fabricação.",
      img: "/pcp-system/imagem2.png"
    },
    {
      title: "Ordens de Produção",
      desc: "Gestão do chão de fábrica, emissão de ordens, controle de status e apontamentos operacionais.",
      img: "/pcp-system/imagem3.png"
    },
    {
      title: "Movimentações de Estoque",
      desc: "Rastreabilidade completa de entradas, saídas, transferências e controle rígido de lotes industriais.",
      img: "/pcp-system/imagem4.png"
    },
    {
      title: "Indicadores & KPIs",
      desc: "Painel completo de análise com OEE, produtividade, controle de perdas e gráficos interativos.",
      img: "/pcp-system/imagem5.png"
    }
  ];

  return (
    <div className="pcp-page">
      {/* Hero Section */}
      <section className="pcp-hero">
        <div className="container pcp-hero-container">
          <div className="pcp-hero-info">
            <span className="badge-featured">Lançamento / ERP Industrial</span>
            <h1 className="hero-title">
              Sistema PCP evoluiu para um <br />
              <span className="text-gradient">ERP Industrial Completo</span>
            </h1>
            <p className="hero-subtitle">
              Mais do que planejar a produção, a plataforma passa a integrar toda a operação industrial de ponta a ponta em um único ambiente. Menos retrabalho. Mais eficiência. Mais resultados para a sua indústria.
            </p>
            
            <div className="hero-cta-box">
              <div className="cta-credentials">
                <Info size={16} />
                <span>
                  <strong>Quer testar o sistema?</strong> Crie sua conta de demonstração gratuita clicando em <strong>"Solicitar Demonstração (Teste Grátis)"</strong> na tela de login.
                </span>
              </div>
              <div className="hero-actions">
                <a 
                  href="https://pcp.ferramentasdiarias.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Acessar Sistema PCP Live <ExternalLink size={16} />
                </a>
                <a href={siteData.profile.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Falar Conosco no WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="pcp-hero-video">
            <div className="video-card">
              <video 
                src="/pcp-system/video1.mp4" 
                controls 
                className="video-player"
                poster="/pcp-system/imagem1.png"
              />
              <div className="video-overlay">
                <p>Fluxo de Integração em Ação</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-glow glow-1"></div>
        <div className="hero-bg-glow glow-2"></div>
      </section>

      {/* Notice Ribbon */}
      <div className="demo-ribbon">
        <div className="container ribbon-content">
          <ShieldAlert size={20} />
          <span>Quer testar as funcionalidades? Crie sua conta de demonstração gratuita na tela de login clicando em <strong>"Solicitar Demonstração"</strong>!</span>
        </div>
      </div>

      {/* Modules/Features Section */}
      <section className="pcp-section pcp-modules">
        <div className="container">
          <div className="section-header-center">
            <h2>Gestão Unificada de <span className="text-gradient">Ponta a Ponta</span></h2>
            <p className="section-subtitle-center">
              Descubra como o nosso ERP Industrial conecta os principais setores da sua empresa em um fluxo de dados único e sem interrupções.
            </p>
          </div>

          <div className="modules-grid">
            {modules.map((mod, index) => {
              const IconComponent = mod.icon;
              return (
                <div className="module-card" key={index}>
                  <div className="icon-wrapper" style={{ backgroundColor: `${mod.color}15`, color: mod.color }}>
                    <IconComponent size={24} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="pcp-section pcp-gallery">
        <div className="container">
          <div className="section-header-center">
            <h2>Interface <span className="text-gradient">Moderna e Intuitiva</span></h2>
            <p className="section-subtitle-center">
              Navegue pelas principais telas e funcionalidades operacionais do nosso ERP Industrial.
            </p>
          </div>

          <div className="gallery-container">
            {/* Tabs Selector */}
            <div className="gallery-tabs">
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  className={`gallery-tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Gallery Content */}
            <div className="gallery-display-card">
              <div className="gallery-image-wrapper">
                <img 
                  src={galleryItems[activeTab].img} 
                  alt={galleryItems[activeTab].title} 
                  className="gallery-image"
                />
              </div>
              <div className="gallery-info">
                <h3>{galleryItems[activeTab].title}</h3>
                <p>{galleryItems[activeTab].desc}</p>
                <div className="gallery-actions">
                  <a 
                    href="https://pcp.ferramentasdiarias.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gallery-demo-link"
                  >
                    Ver ao vivo no Sistema <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="pcp-section pcp-walkthrough">
        <div className="container">
          <div className="walkthrough-box">
            <div className="walkthrough-info">
              <h2>Demonstração Prática do <span className="text-gradient">Fluxo Industrial</span></h2>
              <p>
                Assista ao vídeo explicativo detalhado demonstrando como o Comercial, a Engenharia, o PCP, o Estoque e as Compras operam de maneira totalmente sintonizada. Veja como as decisões de planejamento afetam o estoque e geram compras de matérias-primas de forma inteligente.
              </p>
              <div className="walkthrough-features">
                <div className="w-feature-item">
                  <span className="dot"></span>
                  <span>Fluxo prático de abertura de ordens e faturamento</span>
                </div>
                <div className="w-feature-item">
                  <span className="dot"></span>
                  <span>Cálculos automáticos de demandas de compra</span>
                </div>
                <div className="w-feature-item">
                  <span className="dot"></span>
                  <span>Apontamentos e monitoramento gerencial</span>
                </div>
              </div>
              <a 
                href="https://pcp.ferramentasdiarias.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Testar Plataforma Demo <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="walkthrough-video-wrapper">
              <div className="video-card">
                <video 
                  src="/pcp-system/video2.mp4" 
                  controls 
                  className="video-player"
                  poster="/pcp-system/imagem5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="pcp-cta-section">
        <div className="container">
          <div className="cta-box-gradient">
            <h2>Pronto para otimizar a sua indústria?</h2>
            <p>
              Fale conosco para agendarmos uma apresentação personalizada do ERP Industrial moldada para as necessidades e gargalos operacionais da sua fábrica.
            </p>
            <div className="cta-buttons">
              <a 
                href={siteData.profile.social.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-light"
              >
                <MessageSquare size={18} /> Chamar no WhatsApp
              </a>
              <a 
                href={siteData.profile.social.calendar} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-dark"
              >
                <Calendar size={18} /> Agendar Reunião
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PcpSystem;
