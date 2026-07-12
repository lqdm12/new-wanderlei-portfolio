# Portfólio Wanderlei Antonio — 40 Anos em Dança

Site institucional de Wanderlei Antonio de Oliveira.
Bailarino, professor de ballet e produtor cultural.

---

## Estrutura de arquivos

```
wanderlei-portfolio/
├── index.html              Página principal (17 KB)
├── css/
│   └── style.css           Todos os estilos (23 KB)
├── js/
│   └── main.js             Scroll reveal, navegação, menu mobile (1,3 KB)
└── images/
    ├── hero.jpg            Retrato de capa (fundo do topo)
    ├── retrato.jpg         Retrato da seção Sobre
    ├── corsario.jpg        O Corsário
    ├── harlequinade.jpg    Harlequinade
    ├── don-quixote.jpg     Don Quixote
    ├── bela-adormecida.jpg A Bela Adormecida
    ├── contemporanea.jpg   Dança Contemporânea
    ├── expressao-cenica.jpg Expressão Cênica
    └── aula-ballet.jpg     Aula de ballet (docência)
```

Peso total: aproximadamente 640 KB.

---

## Como publicar

### Opção 1 — Hospedagem tradicional (cPanel, Hostinger, HostGator)

1. Acesse o painel da hospedagem e abra o Gerenciador de Arquivos.
2. Entre na pasta `public_html`.
3. Faça upload de todo o conteúdo desta pasta, mantendo a estrutura
   de subpastas (css, js, images).
4. O site já estará no ar no domínio configurado.

### Opção 2 — Netlify (gratuito, recomendado)

1. Acesse netlify.com e crie uma conta.
2. Arraste a pasta inteira do projeto para a área de deploy.
3. O site fica no ar em segundos, com HTTPS automático.
4. Em Domain Settings, conecte o domínio próprio.

### Opção 3 — GitHub Pages (gratuito)

1. Crie um repositório no GitHub.
2. Suba os arquivos mantendo a estrutura.
3. Em Settings → Pages, ative a publicação a partir da branch main.

---

## Domínio

Recomendação: **wanderleiantonio.art.br**

A extensão `.art.br` é destinada a artistas e profissionais das artes,
transmite credibilidade no meio cultural e ainda tem boa disponibilidade
de nomes. Registro em registro.br, custo aproximado de R$ 40 por ano.

Alternativas:
- wanderleiantonio.com.br
- 40anosemdanca.art.br

---

## Vídeos

Os três vídeos são carregados via Vimeo (embed). Não precisam de
hospedagem própria e não consomem banda do servidor.

| Vídeo                | Link                        |
|----------------------|-----------------------------|
| Aulas de Coreografia | vimeo.com/1203654027        |
| Prelúdio (SEREL)     | vimeo.com/1203654874        |
| Duo (Joinville)      | vimeo.com/1203655595        |

Para trocar ou adicionar vídeos, edite os `<iframe>` na seção
`id="video"` do index.html.

---

## Identidade visual

### Paleta de cores

| Cor              | Código  | Uso                          |
|------------------|---------|------------------------------|
| Fundo            | #0D0C00 | Base de todas as páginas     |
| Vinho profundo   | #400106 | Gradientes e cards           |
| Vinho escuro     | #260101 | Sombras e molduras           |
| Marrom madeira   | #402814 | Bordas e detalhes            |
| Papel envelhecido| #D9B991 | Texto principal e destaques  |
| Papel suave      | #A89070 | Textos secundários           |
| Papel profundo   | #7A6850 | Legendas e copyright         |

Todas as cores estão definidas como variáveis CSS no topo do
arquivo `style.css`, na seção `:root`. Para alterar a paleta
inteira, basta mudar esses valores.

### Tipografia

- **Cormorant Garamond** — títulos, nomes de obras, destaques
- **Jost** — corpo de texto, labels, navegação

Ambas carregadas via Google Fonts. Não precisam de instalação.

---

## Manutenção

### Trocar uma foto

Substitua o arquivo correspondente na pasta `images/`, mantendo
o mesmo nome. Recomenda-se manter proporções similares e otimizar
o peso (máximo 200 KB por imagem).

### Editar textos

Todos os textos estão no `index.html`, em português, dentro das
tags HTML correspondentes. Não é necessário mexer no CSS ou JS.

### Adicionar uma seção

Copie a estrutura de uma seção existente no `index.html` e adicione
o link correspondente no menu de navegação (tanto no `.nav-links`
quanto no `.nav-overlay`).

---

## Compatibilidade

Testado e funcional em:
- Chrome, Firefox, Safari, Edge (versões atuais)
- iOS Safari e Chrome Android
- Responsivo a partir de 320 px de largura

---

© 2026 Wanderlei Antonio de Oliveira
