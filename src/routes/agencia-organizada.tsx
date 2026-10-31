import { createFileRoute } from "@tanstack/react-router";

import apresentacaoCss from "../apresentacao/apresentacao.css?url";
import { Apresentacao } from "../apresentacao/Apresentacao";

export const Route = createFileRoute("/agencia-organizada")({
  head: () => ({
    meta: [
      { title: "Agência organizada e operação escalável | Showa Marketing" },
      {
        name: "description",
        content:
          "Aula interna da Showa Marketing para a Impacto: pessoas, processos e produtividade, da Showa de 2022 até hoje.",
      },
      { property: "og:title", content: "Agência organizada e operação escalável | Showa Marketing" },
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
  component: AgenciaPage,
});

function AgenciaPage() {
  return <Apresentacao deck="agencia" />;
}
