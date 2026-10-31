# Apresentações da Showa

Aulas internas da Showa Marketing para a equipe da Impacto. Um seletor no topo troca
de apresentação:

| Rota | Apresentação |
| --- | --- |
| `/` | Agentes de IA na prática (23 slides, aprovada) |
| `/agencia-organizada` | Agência organizada e operação escalável (24 slides) |

A página de vagas que existia antes foi movida para `/vagas`.

## Isto é uma port, não um projeto para redesenhar

O visual já foi aprovado. Ele segue o site showamarketing.com.br: fundo preto,
fonte Poppins, vermelho da marca `#A72E21` (texto em `#D4473A`), linhas verticais
finas e etiquetas em pílula. Ao editar:

- não trocar paleta, fontes, espaçamentos nem layout;
- não converter para Tailwind nem para componentes shadcn;
- não acrescentar sombras, gradientes ou animações novas;
- mudança de texto = editar só o texto dentro de `Slides.tsx`.

## Onde fica cada coisa

| Arquivo | O que é |
| --- | --- |
| `src/routes/index.tsx`, `src/routes/agencia-organizada.tsx` | uma rota por apresentação, com título e carregamento da fonte e do CSS |
| `src/apresentacao/decks.ts` | lista das apresentações: rota, título, slides e atalhos de seção do topo |
| `src/apresentacao/Apresentacao.tsx` | barra do topo com o seletor, modo TV (setas, F, P, Esc, deslizar no celular) e controles |
| `src/apresentacao/Slides.tsx` | slides de "Agentes de IA na prática"; cada `<section className="slide">` é um slide |
| `src/apresentacao/SlidesAgencia.tsx` | slides de "Agência organizada e operação escalável" (ids começam com `ag-`) |
| `src/apresentacao/apresentacao.css` | todo o visual, com escopo em `.apr` para não afetar outras páginas |
| `src/assets/showa-logo.png`, `showa-icone.png` | logo e ícone da Showa |
| `public/video-psa.mp4` | vídeo de Novembro Azul entregue pelos agentes (slide 19) |

## Regras dos slides

- A numeração "NN / 23" e a frase de "Leve esta ideia" estão escritas em cada slide.
  Ao incluir ou remover um slide, atualizar todos os contadores e `TOTAL_SLIDES` do arquivo.
- Nova apresentação = novo arquivo de slides, uma entrada em `decks.ts` e uma rota.
- As animações de entrada usam as classes `a`, `p` e `f` com a variável `--d`
  (atraso). Elas só rodam quando o slide recebe a classe `in`, controlada pelo
  `Apresentacao.tsx`.
- As telas do OpenBot são recriadas em HTML com o conteúdo real das conversas.
  Só aparecem o Morpheus, o Basheus e o grupo "Showa Marketing - Felipe Ramalho".
- Conteúdo de saúde segue a Resolução CFM nº 2.336/2023: sem promessa de
  resultado, sem superlativos, sem comparação com concorrente.
