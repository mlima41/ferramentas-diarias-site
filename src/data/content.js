export const siteData = {
  profile: {
    siteName: "Ferramentas Diárias",
    name: "Marcelo Martins",
    role: "Especialista em desenvolvimento de soluções",
    headline: "Automatizando processos, organizando dados e impulsionando decisões.",
    bio: [
      "O Ferramentas Diárias é uma plataforma dedicada ao desenvolvimento de soluções práticas para o dia a dia das empresas. O objetivo é criar ferramentas que apoiem e otimizem rotinas em diferentes áreas, como financeiro, industrial, logística e controles operacionais em geral.",
      "Atuo como especialista no desenvolvimento de soluções personalizadas, criando ferramentas sob medida de acordo com as necessidades específicas de cada negócio, sempre com foco em eficiência, organização e tomada de decisão baseada em dados.",
      "Meu foco é criar soluções que unam a visão de negócios com a capacidade técnica, garantindo que a tecnologia seja uma aliada no crescimento e na eficiência operacional."
    ],
    photoUrl: "/profile.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/marcelo-martins-4a2427bb/",
      youtube: "https://www.youtube.com/@marcelomartins2909",
      email: "mailto:contato@exemplo.com",
      whatsapp: "https://wa.me/5511945194918",
      calendar: "https://calendly.com/marcelo4041lima/30min"
    }
  },
  services: [
    {
      id: 1,
      title: "Desenvolvimento de Sistemas e Aplicações Web/Desktop",
      description: "Criação de soluções personalizadas para otimizar processos internos, desde pequenos scripts até sistemas robustos de gestão.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Análise de Dados",
      description: "Transformação de dados brutos em informações estratégicas utilizando ferramentas como Power BI, SQL Server e Excel Avançado.",
      icon: "BarChart"
    },
    {
      id: 3,
      title: "Integração via APIs",
      description: "Conexão de sistemas para automatizar o fluxo de dados entre plataformas, garantindo que todas as suas ferramentas conversem perfeitamente sem falhas manuais.",
      icon: "Network"
    },
    {
      id: 4,
      title: "RPA (Automação Robótica de Processos)",
      description: "Criação de robôs inteligentes (RPA) para executar tarefas repetitivas diárias, operando sistemas como se fossem humanos, com zero margem de erro.",
      icon: "Bot"
    },
    {
      id: 5,
      title: "Planilhas Personalizadas",
      description: "Desenvolvimento de soluções em Excel com macros e VBA, modeladas sob medida para organizar, cruzar e analisar as particularidades do seu negócio.",
      icon: "FileSpreadsheet"
    },
    {
      id: 6,
      title: "Desenvolvimento de Power BI",
      description: "Construção de painéis interativos e painéis visuais avançados, conectando múltiplas fontes de dados para fornecer uma visão 360º da sua empresa.",
      icon: "PieChart"
    }
  ],
  projects: [
    {
      id: 10,
      title: "Logistics Performance Dashboard",
      category: "dados",
      shortDescription: "Análise de desempenho operacional e eficiência de entregas.",
      description: "Dashboard avançado para gestão logística, permitindo monitorar o Total de Entregas, Entregas no Prazo, Atrasos e Custo Logístico por região e transportadora.\n\n✅ Visão clara de KPIs operacionais\n✅ Filtros dinâmicos por período e região\n✅ Análise de evolução mensal das entregas\n✅ Monitoramento de eficiência de transporte",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      demoUrl: "https://bi-logistico.vercel.app/",
      technologies: ["Power BI", "Logística", "Gestão de Dados"]
    },
    {
      id: 2,
      title: "Sistema de Gestão Financeira",
      category: "sistemas",
      shortDescription: "Plataforma intuitiva para controle de fluxo de caixa, DRE e indicadores financeiros.",
      description: "Plataforma web focada no monitoramento da saúde financeira do seu negócio, substituindo planilhas complexas por dados reais e estruturados.\n\n✅ Visão Multi-Empresa centralizada\n✅ DRE automatizado e relatórios gerenciais\n✅ Dashboards integrados para tomada de decisão\n✅ Gestão de acesso seguro para equipes\n\n🔑 Acesso à Versão DEMO:\nLogin: demo | Senha: demo123\n*(Acesso recomendado via PC)*",
      imageUrl: "",
      demoUrl: "https://fluxo-de-caixa-v1.vercel.app/login",
      technologies: ["Web App", "Gestão", "Dashboards"]
    },
    {
      id: 3,
      title: "Automação de Estoque via XML",
      category: "sistemas",
      shortDescription: "Leitura inteligente de notas fiscais (XML) para conciliação automática de inventário.",
      description: "Sistema desenvolvido para eliminar horas de digitação manual, permitindo gerar relatórios de entradas, saídas e saldos de estoque em segundos usando arquivos XML.\n\n✅ Leitura instantânea de Notas Fiscais (XML)\n✅ Conciliação automática de movimentações\n✅ Visão em tempo real do saldo disponível\n✅ Foco na análise de dados, não na digitação\n\n🔒 Acesso à Versão DEMO:\nSolicite o seu login de demonstração através dos meus contatos.\n*(Acesso recomendado via PC)*",
      imageUrl: "",
      demoUrl: "https://estoque-xml.vercel.app/login",
      technologies: ["Web App", "Logística", "Automação XML"]
    },
    {
      id: 6,
      title: "Super Planilha Estoque XML",
      category: "sistemas",
      shortDescription: "Gerenciamento de estoque automatizado via Excel/VBA com leitura de XML.",
      description: "Descubra a revolucionária ferramenta desktop em Excel para gerenciamento de estoque baseado em XML, dizendo adeus à digitalização manual de Notas Fiscais.\n\n✅ Leitura automática de arquivos XML\n✅ Fim da digitação manual de notas fiscais\n✅ Controle prático, eficiente e à prova de erros\n✅ Execução nativa no seu ambiente Excel via VBA\n\n🎥 Demonstração em Vídeo:\nClique no botão de Play na imagem para assistir à apresentação completa da ferramenta.",
      imageUrl: "https://img.youtube.com/vi/mLAGkXbEecI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/mLAGkXbEecI",
      technologies: ["Excel", "VBA", "Automação"]
    },
    {
      id: 7,
      title: "Controle de Despesas e Receitas",
      category: "sistemas",
      shortDescription: "Sistema desktop para gestão financeira rápida e segura com banco de dados local.",
      description: "Aplicação Desktop desenvolvida para facilitar a organização financeira, proporcionando controle absoluto sobre o fluxo de caixa de forma prática e independente de internet.\n\n✅ Controle detalhado de contas a pagar e receber\n✅ Execução offline garantindo rapidez na digitação\n✅ Banco de dados local para máxima segurança dos dados\n✅ Interface focada na usabilidade e eficiência diária\n\n🎥 Demonstração em Vídeo:\nClique no botão de Play na imagem para assistir ao vídeo de apresentação do sistema.",
      imageUrl: "https://img.youtube.com/vi/YTUe4JtNDO0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/YTUe4JtNDO0",
      technologies: ["Desktop App", "Banco de Dados Local", "Gestão Financeira"]
    },
    {
      id: 8,
      title: "Sistema de Curva ABC",
      category: "sistemas",
      shortDescription: "Automação para classificação estratégica de produtos, clientes e estoque via Curva ABC.",
      description: "Esqueça planilhas complexas e cálculos manuais intermináveis. Nosso sistema de Curva ABC automatiza todo o processo analítico, garantindo que você foque no que realmente importa: a decisão estratégica.\n\n✅ Importação fluida de bases de dados brutos\n✅ Classificação automática em Curva A, B e C\n✅ Geração de relatórios gerenciais dinâmicos\n✅ Foco imediato na otimização de lucro e estoque\n\n🎥 Demonstração em Vídeo:\nClique no botão de Play na imagem para assistir à apresentação completa.",
      imageUrl: "https://img.youtube.com/vi/aLEjK98SKGw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/aLEjK98SKGw",
      technologies: ["Automação", "Análise de Dados", "Estratégia"]
    },
    {
      id: 9,
      title: "Sistema de PCP e Produção",
      category: "sistemas",
      shortDescription: "Plataforma completa para Planejamento e Controle de Produção (PCP) com geração de PDFs.",
      description: "A aliada essencial para a sua indústria. Explore diversas funcionalidades reunidas em um projeto único para elevar o gerenciamento fabril a um nível superior de organização e eficiência.\n\n✅ Controle de estoque de produtos acabados (PA) e matéria-prima (MP)\n✅ Estruturação de produtos e explosão exata de materiais\n✅ Empenho eficiente e baixa automatizada de MP\n✅ Geração de Ordens de Produção (OPs) em formato PDF\n\n🎥 Demonstração em Vídeo:\nClique no botão de Play na imagem para assistir ao vídeo do sistema em funcionamento.",
      imageUrl: "https://img.youtube.com/vi/8cbjSB_7N6c/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/8cbjSB_7N6c",
      technologies: ["Excel", "VBA", "Gestão Industrial"]
    }
  ],
  freeMaterials: [
    {
      id: 1,
      title: "Planilha Plano e Planejamento de Produção",
      category: "Planilhas",
      shortDescription: "Ferramenta em Excel focada na estruturação e no controle estratégico da sua produção diária.",
      imageUrl: "https://img.youtube.com/vi/yIN9M2kaB5k/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/yIN9M2kaB5k",
      downloadUrl: "https://drive.google.com/file/d/1drb533_0ow_NP0ywddrQ9dwH7Bpkv0S0/view?usp=sharing"
    },
    {
      id: 2,
      title: "Planilha Gestão de Vendas",
      category: "Planilhas",
      shortDescription: "Planilha completa para registrar, acompanhar a evolução e analisar o desempenho das suas vendas mensais.",
      imageUrl: "/planilha-vendas.png",
      videoUrl: "",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1igS4uYdP2ANi8d785YqpU78M77utMtyV/edit?usp=sharing&ouid=116149039059210118325&rtpof=true&sd=true"
    },
    {
      id: 3,
      title: "Planilha Curva ABC",
      category: "Planilhas",
      shortDescription: "Classifique estrategicamente seus produtos, clientes e estoque de forma automática usando a metodologia da Curva ABC.",
      imageUrl: "https://img.youtube.com/vi/ntMXsN34bu0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ntMXsN34bu0",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1igS4uYdP2ANi8d785YqpU78M77utMtyV/edit?usp=sharing&ouid=116149039059210118325&rtpof=true&sd=true"
    },
    {
      id: 4,
      title: "Planilha MRP",
      category: "Planilhas",
      shortDescription: "Plano de produção e controle de materiais (MRP) para garantir que sua linha nunca pare por falta de insumos.",
      imageUrl: "/planilha-mrp.png",
      videoUrl: "",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1rQ2hp1YACsKoYAqC2fRQGblV11APHGOG/edit?usp=sharing&ouid=116149039059210118325&rtpof=true&sd=true"
    },
    {
      id: 5,
      title: "Planilha para Planejamento de Compras",
      category: "Planilhas",
      shortDescription: "Organize requisições, gerencie cotações e tenha controle total do seu setor de suprimentos com esta ferramenta.",
      imageUrl: "https://img.youtube.com/vi/z_8sCONKjlI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/z_8sCONKjlI",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1rQ2hp1YACsKoYAqC2fRQGblV11APHGOG/edit?usp=sharing&ouid=116149039059210118325&rtpof=true&sd=true"
    },
    {
      id: 6,
      title: "Sistema PCP Demo - Desktop",
      category: "Sistemas",
      shortDescription: "Versão de demonstração gratuita do nosso Sistema PCP para desktop. Baixe, instale e teste na prática.",
      imageUrl: "/sistema-pcp-demo.png",
      videoUrl: "",
      downloadUrl: "https://drive.google.com/file/d/1pE-mKtrS4WccS-gJh8teKMQ8Co4xp1dD/view?usp=sharing"
    }
  ]
};
