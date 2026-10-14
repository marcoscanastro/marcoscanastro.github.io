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

- **`src/data/projects.js`** — os teus projetos. Cada entrada tem título, descrição (em PT e EN), tecnologias, ícone e links (GitHub/demo). Basta editar ou adicionar entradas.
- **`src/data/skills.js`** — as tuas competências, agrupadas por categoria (Linguagens, Frameworks & Ferramentas, Bases de Dados).
- **`src/i18n/translations.js`** — todos os textos do site em português e inglês (título, subtítulo, secção "Sobre mim", etc.).

## Foto e CV

- **Foto de perfil (Sobre mim)**: `public/photo.jpg` — foto normal, com fundo. A secção "Sobre mim" mostra-a numa moldura; se o ficheiro não existir, mostra um ícone de substituição em vez de quebrar.
- **Foto do Hero (recorte sem fundo)**: `public/photo-cutout.png` — versão da foto com o fundo removido (transparente), usada no Hero para o efeito "silhueta flutuante" sobre o fundo roxo. Se quiseres trocar de foto, precisas de gerar um novo recorte com fundo transparente (ex: [remove.bg](https://remove.bg) ou a ferramenta `rembg` em Python) e substituir este ficheiro. Se o ficheiro não existir, o Hero usa `photo.jpg` como alternativa.
- **CV**: ainda não está ligado nenhum botão de download. Quando tiveres o PDF, coloca-o em `public/cv.pdf` e adiciona um link `<a href="/cv.pdf" download>` onde fizer sentido (por exemplo, na secção Hero ou Contacto).

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
