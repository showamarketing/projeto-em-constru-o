// A apresentação 02 ("Agência organizada") tem duas telas escondidas do público:
// continuam escritas em SlidesAgencia.tsx, mas marcadas com hidden. Este teste
// garante que elas seguem no código, fora da contagem, e que nenhum atalho do
// topo leva a uma tela que não aparece.
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Slides, TOTAL_SLIDES } from "@/apresentacao/SlidesAgencia";
import { DECKS } from "@/apresentacao/decks";

const OCULTAS = ["ag-tempo-criar", "ag-gargalo"];

function slidesDaTela() {
  const { container } = render(<Slides />);
  return [...container.querySelectorAll<HTMLElement>(".slide")];
}

describe("Apresentação 02 — telas ocultas", () => {
  it("mantém as duas telas no código, mas fora da apresentação", () => {
    const slides = slidesDaTela();

    expect(slides).toHaveLength(TOTAL_SLIDES);
    OCULTAS.forEach((id) => {
      const s = slides.find((el) => el.id === id);
      expect(s, `tela ${id} sumiu do código`).toBeTruthy();
      expect(s!.hidden, `tela ${id} não está oculta`).toBe(true);
    });

    expect(slides.filter((s) => !s.hidden)).toHaveLength(TOTAL_SLIDES - OCULTAS.length);
  });

  it("nenhum atalho do topo aponta para uma tela oculta", () => {
    const visiveis = new Set(slidesDaTela().filter((s) => !s.hidden).map((s) => s.id));
    const deck = DECKS.find((d) => d.key === "agencia")!;

    deck.nav.forEach((n) => expect(visiveis, `atalho ${n.href}`).toContain(n.href.slice(1)));
  });
});
