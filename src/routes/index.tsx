import { createFileRoute } from "@tanstack/react-router";

import apresentacaoCss from "../apresentacao/apresentacao.css?url";
import { Apresentacao } from "../apresentacao/Apresentacao";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agentes de IA na prática | Showa Marketing" },
      {
        name: "description",
        content:
          "Aula interna da Showa Marketing sobre agentes de IA: como funcionam, o protótipo no OpenBot e o vídeo de Novembro Azul entregue pelos agentes.",
      },
      { property: "og:title", content: "Agentes de IA na prática | Showa Marketing" },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: apresentacaoCss },
    ],
  }),
  component: Apresentacao,
});
