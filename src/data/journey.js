// Percurso (do CV). logo: ficheiro em public/percurso/. icon: glifo de reserva. period só quando o CV o indica.
export const journey = [
  {
    id: "amarela",
    logo: "/percurso/amarela-mecanica.webp",
    logoTile: true,
    kind: { pt: "Estágio", en: "Internship" },
    title: { pt: "Amarela Mecânica Filmes", en: "Amarela Mecânica Filmes" },
    body: {
      pt: "Estágio com tecnologias de modelagem 3D e AR/VR.",
      en: "Internship working with 3D modelling and AR/VR technologies.",
    },
    tags: ["3D", "AR/VR"],
  },
  {
    id: "merkle",
    logo: "/percurso/merkle.webp",
    kind: { pt: "Estágio · Leiria", en: "Internship · Leiria" },
    title: { pt: "MERKLE Portugal", en: "MERKLE Portugal" },
    body: {
      pt: "Estágio no setor de Leiria, como Desenvolvedor Júnior PHP.",
      en: "Internship in the Leiria office, as a Junior PHP Developer.",
    },
    tags: ["PHP"],
  },
  {
    id: "iefp",
    icon: "school",
    period: "2025 - 2026",
    kind: { pt: "Formação", en: "Education" },
    title: { pt: "IEFP — dois CET", en: "IEFP — two CET courses" },
    body: {
      pt: "CET Programação de Sistemas Informáticos (Nível 5) e CET Analista de Dados (Nível 4).",
      en: "CET in Computer Systems Programming (Level 5) and CET in Data Analysis (Level 4).",
    },
  },
  {
    id: "modelo",
    icon: "checkroom",
    period: "2023 - 2024",
    kind: { pt: "Experiência", en: "Experience" },
    title: { pt: "Modelo de Passarela", en: "Runway Model" },
    body: {
      pt: "Adaptação ao ambiente profissional e trabalho sob pressão em eventos de alto perfil e exigência.",
      en: "Adapting to a professional environment and working under pressure at high-profile, demanding events.",
    },
  },
  {
    id: "salvador",
    icon: "pool",
    period: { pt: "Verão de 2023", en: "Summer 2023" },
    kind: { pt: "Trabalho comunitário", en: "Community work" },
    title: { pt: "Nadador Salvador", en: "Lifeguard" },
    body: {
      pt: "Responsável pela segurança dos banhistas, com treinos de gestão de emergências e primeiros socorros.",
      en: "Responsible for bather safety, with training in emergency management and first aid.",
    },
  },
  {
    id: "esim",
    icon: "architecture",
    period: "2019 - 2024",
    kind: { pt: "Formação", en: "Education" },
    title: { pt: "12º Ano — ESIM", en: "12th Grade — ESIM" },
    body: { pt: "Curso de Arquitetura.", en: "Architecture course." },
  },
]

export const languages = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Língua materna", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "C1 · oral e escrito", en: "C1 · spoken and written" } },
  { name: { pt: "Espanhol", en: "Spanish" }, level: { pt: "B2 · oral e escrito", en: "B2 · spoken and written" } },
]
