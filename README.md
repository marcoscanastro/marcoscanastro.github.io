# Portfolio

Site pessoal para apresentar projetos, construído em React + Vite + Tailwind CSS, com tema escuro roxo e seletor de idioma Português/Inglês.

## Como correr o projeto

```bash
npm install
npm run dev
```

Abre o URL que aparece no terminal (normalmente `http://localhost:5173`).

### Build de produção

```bash
npm run build
```

Gera os ficheiros finais em `dist/`, prontos para publicar em qualquer serviço de alojamento estático.

### Deploy (produção)

O site está publicado em **https://marcoscanastro.github.io** (repositório `marcoscanastro/marcoscanastro.github.io`, na organização `marcoscanastro`). Cada `git push` para `main` corre `.github/workflows/deploy.yml`, que faz `npm ci` + `npm run build` e publica `dist/` no GitHub Pages — não é preciso fazer deploy manual. Para forçar um novo deploy sem alterações: separador **Actions → Deploy to GitHub Pages → Run workflow**.

## Como editar o conteúdo

Não é preciso mexer nos componentes para atualizar o conteúdo do site — está tudo em ficheiros de dados simples:

- **`src/data/projects.js`** — os teus projetos. Cada entrada tem título e descrição (em PT e EN), tecnologias, links (GitHub/demo) e, opcionalmente, `media` (vídeo + poster), `logo` (ícone da app), `icon` (glifo de reserva) e `private: true` (repositório privado: mostra "Repositório privado" em vez de um link). Basta editar ou adicionar entradas.
- **`src/data/skills.js`** — as tuas competências, agrupadas por categoria (Linguagens, Frameworks & Ferramentas, Bases de Dados).
- **`src/i18n/translations.js`** — todos os textos do site em português e inglês (título, subtítulo, secção "Sobre mim", etc.).

## Foto e CV

- **Foto do Hero (recorte sem fundo)**: `public/photo-cutout.png` — a foto com o fundo removido (transparente), usada no Hero para o efeito "silhueta flutuante". Se quiseres trocar de foto, gera um novo recorte com fundo transparente (ex: [remove.bg](https://remove.bg) ou a ferramenta `rembg` em Python) e substitui este ficheiro. `public/photo.jpg` é a foto original e serve de alternativa se o recorte não existir.
- **CV**: `public/cv.pdf` — é o ficheiro descarregado pelo botão "Baixar CV" do Hero. Para atualizar o CV, substitui este ficheiro mantendo o nome.

## Imagens e vídeos dos projetos

Ficam em `public/projects/` e são ligados em `src/data/projects.js`:

| Projeto | Ficheiros | Como foi obtido |
|---|---|---|
| Model-Viewer, MindAR.js, AR.js | `model-viewer`, `mindar`, `arjs` (`.mp4` + `.webp`) | Capturas das demos publicadas (ver abaixo) |
| Hand of God | `hand-of-god` (`.mp4` + `.webp`) | Replay do output real de `python cli.py --help` |
| FinFlow | `finflow-icon.webp` | Ícone real da app (`ic_launcher-playstore.png`) |

- Cada vídeo é um loop curto, sem áudio, em **H.264 960×540** (ideal abaixo de ~1 MB) com um **poster WebP**. Só toca quando o cartão está visível no ecrã e nunca com "reduzir movimento" ativo (nesse caso fica o poster).
- As demos de AR foram gravadas com o Chromium (Playwright) a abrir as páginas publicadas, com uma **câmara simulada** (um vídeo da imagem-alvo/marcador) para o AR realmente arrancar; o visualizador 3D é uma volta de 360° ao modelo da própria página. Não são maquetes: é o que as demos mostram.
- **Para acrescentar um projeto com vídeo:** grava ou exporta o loop, converte com `ffmpeg -i entrada -vf "fps=24,scale=960:-2" -c:v libx264 -crf 27 -pix_fmt yuv420p -movflags +faststart -an nome.mp4`, tira um quadro para `nome.webp`, copia ambos para `public/projects/` e preenche `media: { video, poster, alt: { pt, en } }`.
- **FinFlow e BTV** ainda não têm capturas de ecrã reais (não existem no repositório): usam o ícone da app / um glifo de reserva até haver imagens.

## Estrutura

```
src/
├── App.jsx                  # monta as secções da página
├── i18n/                    # sistema de tradução PT/EN (Context + localStorage)
├── data/                    # projetos e skills (conteúdo editável)
├── hooks/useInView.js       # animação de entrada ao fazer scroll
└── components/
    ├── sections/             # Hero, Solutions, About, Skills, Projects, Contact
    └── ...                   # Navbar, Footer, ProjectCard, ícones
```

## Notas

- Sem backend nesta versão — o contacto é feito por `mailto:`, LinkedIn e GitHub. Formulário de contacto e loja de serviços ficam para uma fase futura.
- Paleta de cores e tipografia (Space Grotesk, Inter, JetBrains Mono) definidas em `src/index.css`.
