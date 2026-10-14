// media: vídeo curto + poster em public/projects/ (ver DOCUMENTACAO.md). logo: ícone real da app. icon: glifo de reserva.
export const projects = [
  {
    id: "finflow",
    title: { pt: "FinFlow — Gestão Financeira", en: "FinFlow — Finance Manager" },
    description: {
      pt: "App Android de finanças pessoais em Kotlin e Jetpack Compose: despesas, receitas, metas e cartões, com relatórios em PDF e Excel, ligada a uma API REST com autenticação JWT.",
      en: "Personal finance Android app in Kotlin and Jetpack Compose: expenses, income, goals and cards, with PDF and Excel reports, connected to a REST API with JWT authentication.",
    },
    tech: ["Kotlin", "Jetpack Compose", "Retrofit"],
    icon: "savings",
    logo: "/projects/finflow-icon.webp",
    links: { github: "https://github.com/Katsuo666/FinFlow_Project", demo: "" },
  },
  {
    id: "hand-of-god",
    title: { pt: "Hand of God — OSINT + Pentest", en: "Hand of God — OSINT + Pentest" },
    description: {
      pt: "Framework de linha de comandos em Python que reúne mais de 25 ferramentas de OSINT e pentest: reconhecimento, CVEs, ASN, análise de APKs, dependências e infraestrutura como código.",
      en: "Python command-line framework bundling over 25 OSINT and pentest tools: recon, CVEs, ASN, APK analysis, dependency and infrastructure-as-code checks.",
    },
    tech: ["Python", "CLI", "OSINT"],
    icon: "shield_lock",
    media: {
      video: "/projects/hand-of-god.mp4",
      poster: "/projects/hand-of-god.webp",
      alt: {
        pt: "Terminal a executar python cli.py --help e a listar os subcomandos do framework.",
        en: "Terminal running python cli.py --help and listing the framework's subcommands.",
      },
    },
    links: { github: "https://github.com/Katsuo666/Hand-of-God-UNIFIED", demo: "" },
  },
  {
    id: "model-viewer",
    title: { pt: "Visualizador 3D com Model-Viewer", en: "3D Viewer with Model-Viewer" },
    description: {
      pt: "Visualizador 3D interativo com o componente <model-viewer> da Google e passagem direta para AR nativa no telemóvel (Scene Viewer e AR Quick Look).",
      en: "Interactive 3D viewer built with Google's <model-viewer> component, with a direct jump to native mobile AR (Scene Viewer and AR Quick Look).",
    },
    tech: ["JavaScript", "Model-Viewer", "WebAR"],
    icon: "3d_rotation",
    media: {
      video: "/projects/model-viewer.mp4",
      poster: "/projects/model-viewer.webp",
      alt: {
        pt: "Volta de 360 graus ao modelo 3D de um camião de brinquedo no visualizador web.",
        en: "360-degree turn of a 3D toy truck model in the web viewer.",
      },
    },
    links: {
      github: "https://github.com/Katsuo666/Teste_site_Google-model-viewer",
      demo: "https://teste-site-google-model-viewer.vercel.app",
    },
  },
  {
    id: "mindarjs",
    title: { pt: "Realidade Aumentada com MindAR.js", en: "Augmented Reality with MindAR.js" },
    description: {
      pt: "Realidade aumentada no browser com rastreamento de imagem: reconhece a ilustração de um livro e projeta o modelo 3D por cima, sem marcadores.",
      en: "Browser-based augmented reality with image tracking: it recognises a book illustration and overlays the 3D model, no markers needed.",
    },
    tech: ["JavaScript", "MindAR.js", "WebAR"],
    icon: "face",
    media: {
      video: "/projects/mindar.mp4",
      poster: "/projects/mindar.webp",
      alt: {
        pt: "Camião 3D animado a aparecer sobre a ilustração de um livro, rastreada pela câmara.",
        en: "Animated 3D truck appearing over a book illustration tracked by the camera.",
      },
    },
    links: {
      github: "https://github.com/Katsuo666/Teste_site_MindAR.js",
      demo: "https://teste-site-mind-ar-js.vercel.app",
    },
  },
  {
    id: "arjs",
    title: { pt: "Realidade Aumentada com AR.js", en: "Augmented Reality with AR.js" },
    description: {
      pt: "Realidade aumentada com marcadores: um único index.html carrega o modelo 3D e o marcador a partir do URL do QR code.",
      en: "Marker-based augmented reality: a single index.html loads the 3D model and marker from the QR code URL.",
    },
    tech: ["JavaScript", "AR.js", "WebAR"],
    icon: "view_in_ar",
    media: {
      video: "/projects/arjs.mp4",
      poster: "/projects/arjs.webp",
      alt: {
        pt: "Camião 3D animado ao lado de um marcador AR.js detetado pela câmara.",
        en: "Animated 3D truck next to an AR.js marker detected by the camera.",
      },
    },
    links: {
      github: "https://github.com/Katsuo666/Teste_site_AR.js",
      demo: "https://teste-site-ar-js.vercel.app",
    },
  },
  {
    id: "btv",
    title: { pt: "BTV — Descarregador de Vídeos", en: "BTV — Video Downloader" },
    description: {
      pt: "Aplicação Android para descarregar vídeos.",
      en: "Android app for downloading videos.",
    },
    tech: ["Android"],
    icon: "download",
    private: true,
    links: { github: "", demo: "" },
  },
]
