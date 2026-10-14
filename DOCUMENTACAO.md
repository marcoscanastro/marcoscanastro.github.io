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

- `src/data/projects.js` — array de projetos. Adicionar/editar entradas aqui atualiza automaticamente o grid em `Projects.jsx`, sem tocar em componentes.
- `src/data/skills.js` — array de categorias de competências.

## Tema visual

Paleta de cores, tipografia e efeitos (glow roxo, grelha de fundo subtil) definidos em `src/index.css` através do bloco `@theme` do Tailwind v4 e da camada `@layer utilities`. Os tokens de cor (`primary`, `surface-card`, `outline-dim`, etc.) foram escolhidos para replicar uma referência de design fornecida pelo utilizador (dark mode com glows roxos, tipografia Space Grotesk/Inter/JetBrains Mono).

Fundo ambiente: `App.jsx` tem uma camada `fixed inset-0` com 3 blobs roxos desfocados (`blur-[...]`) + a grelha `bg-tiles-grid`, replicando a "ambient lighting" da referência em toda a página (não só no Hero).

Ícones: fonte **Material Symbols Outlined** (Google Fonts) para ícones genéricos (setas, terminal, base de dados), e SVGs inline (`src/components/Icons.jsx`) para GitHub/LinkedIn/Mail — evita adicionar uma biblioteca de ícones em JS para apenas ~3 ícones de marca.

### Foto do Hero (recorte sem fundo)

O Hero usa `public/photo-cutout.png` — a foto de perfil com o fundo removido (canal alfa transparente), para a colocar diretamente sobre o fundo ambiente com máscaras CSS (`mask-image: linear-gradient(...)` para desvanecer a base, `radial-gradient(...)` para a grelha atrás), tal como a "frameless cutout" da referência. Este ficheiro foi gerado uma única vez com `rembg` (Python, modelo `u2net_human_seg`) a partir de `public/photo.jpg` — não é gerado automaticamente pelo build. Se a foto for substituída, é preciso gerar um novo recorte com fundo transparente (rembg, remove.bg, etc.) e voltar a guardar em `public/photo-cutout.png`.

## Decisões de arquitetura (e o que ficou de fora, por agora)

| Decisão | Porquê |
|---|---|
| Sem router | Site de uma página só; navegação por âncoras (`#projetos`, `#contacto`) chega. |
| Sem biblioteca de i18n | 4-5 secções estáticas não justificam `react-i18next`; Context + objetos simples é suficiente. |
| Sem Framer Motion | O único efeito de movimento é fade/slide ao entrar no ecrã — coberto por `src/hooks/useInView.js` (IntersectionObserver) + classes Tailwind de transição. |
| Sem formulário de contacto / backend | Fora do âmbito desta fase — contacto é feito por `mailto:`, LinkedIn e GitHub. |
| Secção "Soluções" (`Solutions.jsx`) adaptada, não copiada | A referência tem um bento grid "Why Partner With Me" com métricas de performance fictícias (P99, uptime) e uma empresa inventada. Mantivemos o layout/animações (grid 7/5/5/7, ícones, hover glow) mas com conteúdo genuíno baseado no CV real do utilizador (código organizado, aprendizagem rápida, versatilidade, trabalho em equipa). |
| Sem secção de Serviços / depoimentos / vídeo | Decisão explícita do utilizador: só apresentação de projetos por agora, sem venda de serviços. Depoimentos de clientes e vídeo "manifesto" da referência original foram removidos por serem conteúdo fabricado (nomes, empresas e citações inventadas) — não fazem sentido para um portfolio real sem clientes ainda. |

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
