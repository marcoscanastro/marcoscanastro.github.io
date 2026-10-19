# Documentação Técnica

## Stack

- **React 19** + **Vite** — SPA de página única, sem router (navegação por âncoras `#secção`).
- **Tailwind CSS v4** (via plugin `@tailwindcss/vite`) — tokens de tema definidos em `src/index.css` com `@theme`, sem `tailwind.config.js` separado.
- Sem dependências extra: sem biblioteca de i18n, sem animação (Framer Motion), sem router, sem gestor de estado, sem framework de testes. Ver justificação abaixo.

## Idioma (PT/EN)

Implementado com `src/i18n/LanguageContext.jsx`:

- `LanguageProvider` guarda o idioma atual (`useState`, inicializado a partir do `localStorage`) e persiste a escolha sempre que muda.
- O hook `useLanguage()` devolve `{ lang, setLanguage, t }`, onde `t` é o dicionário de textos do idioma atual (de `src/i18n/translations.js`).
- Os componentes acedem diretamente a `t.hero.title`, sem chaves de tradução nem biblioteca externa — suficiente para o número reduzido de secções estáticas do site.
- Conteúdo de dados (títulos/descrições de projetos) usa o mesmo padrão: `{ pt: '...', en: '...' }` dentro de `src/data/projects.js`.

## Dados editáveis

- `src/data/projects.js` — array de projetos. Adicionar/editar entradas aqui atualiza automaticamente o grid em `Projects.jsx`, sem tocar em componentes. Campos opcionais: `media` (`video`, `poster`, `alt` PT/EN), `logo` (ícone da app), `icon` (glifo de reserva) e `private` (sem link para o código). Os ficheiros ficam em `public/projects/` (ver README).
- `src/data/skills.js` — array de categorias de competências.
- `src/data/journey.js` — itens do "Percurso" (`Journey.jsx`, entre Sobre e Skills) e lista de idiomas. A ordem do array é a ordem na página; os estágios vêm primeiro (MERKLE Portugal é o mais recente) e não têm `period`, para não inventar datas; os restantes só têm `period` quando o CV o indica. Logótipos em `public/percurso/` (webp otimizado); os transparentes usam `logoTile` para ficarem legíveis também no tema escuro.
- CV por idioma: `public/cv-pt.pdf` e `public/cv-en.pdf`, escolhidos em `hero.cvHref` (`translations.js`), por isso o botão do Hero acompanha o idioma do site.

## Tema visual

Paleta de cores, tipografia e efeitos (glow roxo, grelha de fundo subtil) definidos em `src/index.css` através do bloco `@theme` do Tailwind v4 e da camada `@layer utilities`. Os tokens de cor (`primary`, `surface-card`, `outline-dim`, etc.) foram escolhidos para replicar uma referência de design fornecida pelo utilizador (dark mode com glows roxos, tipografia Space Grotesk/Inter/JetBrains Mono).

Fundo ambiente: `App.jsx` tem uma camada `fixed inset-0` com 3 blobs roxos desfocados (`blur-[...]`) + a grelha `bg-tiles-grid`, replicando a "ambient lighting" da referência em toda a página (não só no Hero).

Ícones: fonte **Material Symbols Outlined** (Google Fonts) para ícones genéricos (setas, terminal, base de dados), e SVGs inline (`src/components/Icons.jsx`) para GitHub/LinkedIn/Mail — evita adicionar uma biblioteca de ícones em JS para apenas ~3 ícones de marca.

### Modo claro / escuro

O tema é definido por `data-theme="light|dark"` no `<html>`. Os tokens de cor (`--color-*`, em `src/index.css`) têm os valores escuros por defeito e são redefinidos no bloco `html[data-theme="light"]` — como todas as classes Tailwind (`bg-surface-card`, `text-on-surface`, `border-outline-dim`…) usam essas variáveis, não é preciso classes `dark:` em lado nenhum. Por isso evita cores fixas (`text-white`, `bg-[#...]`) nos componentes: usa sempre os tokens (`text-on-surface`, `bg-surface-dim`…), senão ficam ilegíveis num dos modos.

- Um pequeno script em `index.html` define o tema antes do primeiro render (escolha guardada em `localStorage["theme"]`, senão a preferência do sistema), para não haver "flash" do tema errado.
- `src/components/ThemeToggle.jsx` (na navbar) alterna o atributo e guarda a escolha.

### Foto do Hero (recorte sem fundo)

O Hero usa `public/photo-cutout.png` — a foto de perfil com o fundo removido (canal alfa transparente), para a colocar diretamente sobre o fundo ambiente com máscaras CSS (`mask-image: linear-gradient(...)` para desvanecer a base, `radial-gradient(...)` para a grelha atrás), tal como a "frameless cutout" da referência. Este ficheiro foi gerado uma única vez com `rembg` (Python, modelo `u2net_human_seg`) a partir de `public/photo.jpg` — não é gerado automaticamente pelo build. Se a foto for substituída, é preciso gerar um novo recorte com fundo transparente (rembg, remove.bg, etc.) e voltar a guardar em `public/photo-cutout.png`.

## Movimento (animações)

Princípio: cada animação tem de explicar algo (estado, relação, hierarquia) ou ser o momento autoral de uma secção; nada de "o mesmo fade-up em tudo". Tudo é CSS/WAAPI, sem bibliotecas, e usa sobretudo `transform` e `opacity`.

| Onde | O que faz | Porquê |
|---|---|---|
| Hero | O título é revelado de cima para baixo (`hero-wipe`) e a foto sobe de trás da secção (`hero-rise`); o resto entra em cascata curta | É o momento de abertura; título e foto têm movimentos diferentes |
| Listas de cartões | Entrada com fade + subida + desfoque, com atraso curto entre irmãos (`.reveal`) | Os cartões aparecem como uma lista |
| Cartões de projeto | A imagem "assenta" (zoom 1.14→1), parallax suave e uma luz que segue o rato (só com rato); o vídeo só toca visível | Dá profundidade à imagem real sem distrair |
| Navbar | Secção ativa sublinhada (scrollspy com `IntersectionObserver`) | Orientação numa página longa |
| Topo da página | Barra de progresso de leitura (`animation-timeline: scroll()`, escondida se não houver suporte) | Mostra onde estás |
| Botão de tema | O novo tema abre como um círculo a partir do botão (View Transitions API) | Explica de onde veio a mudança; sem suporte, troca direta |
| Faixa de tecnologias | Marquee contínuo (o único da página) | Mostra a amplitude de tecnologias |

**Acessibilidade:** com `prefers-reduced-motion: reduce` desaparecem as entradas, o parallax, o marquee e a revelação do tema, e os vídeos ficam no poster; o conteúdo fica sempre visível. Os vídeos pausam também quando o separador fica em segundo plano.

**Onde está:** keyframes e classes em `src/index.css`; lógica em `src/components/ProjectCard.jsx` (vídeo, parallax), `Navbar.jsx` (scrollspy) e `ThemeToggle.jsx` (revelação do tema).

## Decisões de arquitetura (e o que ficou de fora, por agora)

| Decisão | Porquê |
|---|---|
| Sem router | Site de uma página só; navegação por âncoras (`#projetos`, `#contacto`) chega. |
| Sem biblioteca de i18n | 4-5 secções estáticas não justificam `react-i18next`; Context + objetos simples é suficiente. |
| Sem Framer Motion | Todo o movimento é CSS + WAAPI + `IntersectionObserver` (`src/hooks/useInView.js`, scrollspy e vídeos), sem dependências — ver a secção "Movimento". |
| Sem formulário de contacto / backend | Fora do âmbito desta fase — contacto é feito por `mailto:`, LinkedIn e GitHub. |
| Secção "Soluções" (`Solutions.jsx`) adaptada, não copiada | A referência tem um bento grid "Why Partner With Me" com métricas de performance fictícias (P99, uptime) e uma empresa inventada. Mantivemos o layout/animações (grid 7/5/5/7, ícones, hover glow) mas com conteúdo genuíno baseado no CV real do utilizador (código organizado, aprendizagem rápida, versatilidade, trabalho em equipa). |
| Sem secção de Serviços / depoimentos / vídeo "manifesto" | Decisão explícita do utilizador: só apresentação de projetos por agora, sem venda de serviços. Depoimentos de clientes e vídeo "manifesto" da referência original foram removidos por serem conteúdo fabricado (nomes, empresas e citações inventadas) — não fazem sentido para um portfolio real sem clientes ainda. |
| Imagens dos projetos são capturas reais | Nada de maquetes em `<div>`: os vídeos vêm das demos publicadas (com câmara simulada nas de AR) e do output real do CLI. Onde não há captura (FinFlow, BTV) usa-se o ícone real da app ou um glifo de reserva até haver screenshots. |

## Como testar alterações

```bash
npm run dev     # servidor de desenvolvimento com hot-reload
npm run build   # build de produção — deve terminar sem erros
npm run lint    # oxlint
```

Verificação manual recomendada após alterações:
- Toggle de idioma (PT/EN) muda todo o texto e mantém-se depois de recarregar a página.
- Scroll por âncora (menu de navegação) funciona.
- Responsividade a 375px, 768px e 1280px (menu hamburger em mobile).
