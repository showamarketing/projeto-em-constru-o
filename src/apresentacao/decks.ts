// As apresentações do projeto. Cada uma tem a própria rota, os próprios slides
// e os atalhos de seção da barra do topo. O seletor do topo lista esta ordem.
import type { ComponentType } from "react";
import * as agentes from "./Slides";
import * as agencia from "./SlidesAgencia";

export type DeckKey = "agentes" | "agencia";

export type Deck = {
  key: DeckKey;
  path: string;
  title: string;
  subtitle: string;
  Slides: ComponentType;
  total: number;
  nav: { href: string; label: string }[];
};

export const DECKS: Deck[] = [
  {
    key: "agentes",
    path: "/",
    title: "Agentes de IA na prática",
    subtitle: "Agentes, OpenBot e o vídeo de Novembro Azul",
    Slides: agentes.Slides,
    total: agentes.TOTAL_SLIDES,
    nav: [
      { href: "#diferenca", label: "Diferença" },
      { href: "#grokbot", label: "Aplicativos" },
      { href: "#prototipo", label: "Protótipo" },
      { href: "#elevenlabs", label: "Narração" },
      { href: "#rotina", label: "Rotina" },
    ],
  },
  {
    key: "agencia",
    path: "/agencia-organizada",
    title: "Agência organizada e operação escalável",
    subtitle: "Pessoas, processos e produtividade",
    Slides: agencia.Slides,
    total: agencia.TOTAL_SLIDES,
    nav: [
      { href: "#ag-origem", label: "Começo" },
      { href: "#ag-audiovisual", label: "Audiovisual" },
      { href: "#ag-nicho", label: "Nicho" },
      { href: "#ag-processos", label: "Processos" },
      { href: "#ag-tempo-criar", label: "Impacto" },
    ],
  },
];
