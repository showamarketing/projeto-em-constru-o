// Apresentações da Showa: modo documento (slides empilhados), modo TV (um slide
// por vez) e seletor no topo para trocar de apresentação. A lógica mexe direto nas classes do DOM, como
// no artefato original, para as animações reiniciarem a cada troca de slide.
import { useEffect, useRef } from "react";
import logo from "@/assets/showa-logo.png";
import { DECKS, type DeckKey } from "./decks";

export function Apresentacao({ deck: deckKey }: { deck: DeckKey }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const deck = DECKS.find((d) => d.key === deckKey) ?? DECKS[0]!;
  const { Slides } = deck;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const slides = [...root.querySelectorAll<HTMLElement>(".slide")];
    const N = slides.length;
    const segs = [...root.querySelectorAll<HTMLElement>(".pbar i")];
    const hint = root.querySelector<HTMLElement>(".hint")!;
    const btnPause = root.querySelector<HTMLButtonElement>("#btnPause")!;
    const picker = root.querySelector<HTMLDetailsElement>(".picker")!;
    let cur = 0;
    let hintT: number | undefined;

    const isPresenting = () => root.classList.contains("presenting");
    const replay = (s: HTMLElement) => {
      s.classList.remove("in");
      void s.offsetWidth;
      s.classList.add("in");
    };
    const stopVideos = (keep?: HTMLElement) =>
      root.querySelectorAll("video").forEach((v) => {
        if (!keep || !keep.contains(v)) v.pause();
      });

    // modo documento: anima quando o slide entra na tela
    const io = new IntersectionObserver(
      (es) => {
        if (isPresenting()) return;
        es.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.classList.add("in");
            cur = slides.indexOf(el);
          } else {
            el.classList.remove("in");
            el.querySelectorAll("video").forEach((v) => v.pause());
          }
        });
      },
      { threshold: 0.4 },
    );
    slides.forEach((s) => io.observe(s));

    function go(i: number) {
      cur = Math.max(0, Math.min(N - 1, i));
      slides.forEach((s, k) => {
        s.classList.toggle("active", k === cur);
        if (k !== cur) s.classList.remove("in");
      });
      replay(slides[cur]!);
      stopVideos(slides[cur]!);
      segs.forEach((g, k) => {
        g.className = k < cur ? "done" : k === cur ? "cur" : "";
      });
    }
    function showHint() {
      hint.classList.remove("hide");
      window.clearTimeout(hintT);
      hintT = window.setTimeout(() => hint.classList.add("hide"), 3500);
    }
    function present() {
      // começa no slide que está no topo da tela
      let best = 0;
      let dist = Infinity;
      slides.forEach((s, k) => {
        const d = Math.abs(s.getBoundingClientRect().top - 80);
        if (d < dist) {
          dist = d;
          best = k;
        }
      });
      cur = best;
      picker.open = false;
      root!.classList.add("presenting");
      document.documentElement.style.overflow = "hidden";
      go(cur);
      showHint();
    }
    function exit() {
      root!.classList.remove("presenting");
      document.documentElement.style.overflow = "";
      slides.forEach((s) => s.classList.remove("active"));
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      slides[cur]!.scrollIntoView({ block: "start" });
    }
    function full() {
      try {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
        else document.documentElement.requestFullscreen?.().catch(() => {});
      } catch {
        /* tela cheia é opcional */
      }
    }
    function togglePause() {
      const p = root!.classList.toggle("paused");
      btnPause.textContent = p ? "Retomar animações" : "Pausar animações";
      root!.querySelectorAll("svg").forEach((s) => {
        try {
          if (p) s.pauseAnimations();
          else s.unpauseAnimations();
        } catch {
          /* svg sem animação */
        }
      });
    }

    const on = (sel: string, fn: () => void) => {
      const el = root.querySelector(sel);
      el?.addEventListener("click", fn);
      return () => el?.removeEventListener("click", fn);
    };
    const offs = [
      on("#btnPresent", () => {
        present();
        full();
      }),
      on("#btnPause", togglePause),
      on("#pPrev", () => go(cur - 1)),
      on("#pNext", () => go(cur + 1)),
      on("#pFull", full),
      on("#pExit", exit),
    ];

    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest?.("input,textarea")) return;
      const k = e.key;
      if (k === "Escape" && picker.open) {
        picker.open = false;
        return;
      }
      if (!isPresenting()) {
        if (k === "f" || k === "F") {
          present();
          full();
        }
        return;
      }
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(k)) {
        e.preventDefault();
        go(cur + 1);
      } else if (["ArrowLeft", "PageUp", "Backspace"].includes(k)) {
        e.preventDefault();
        go(cur - 1);
      } else if (k === "Home") go(0);
      else if (k === "End") go(N - 1);
      else if (k === "f" || k === "F") full();
      else if (k === "p" || k === "P") togglePause();
      else if (k === "Escape" && !document.fullscreenElement) exit();
    };
    const onDocClick = (e: MouseEvent) => {
      if (picker.open && !picker.contains(e.target as Node)) picker.open = false;
    };
    const onMove = () => {
      if (isPresenting()) showHint();
    };
    let tx: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      tx = e.touches[0]!.clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (tx === null || !isPresenting()) return;
      const dx = e.changedTouches[0]!.clientX - tx;
      tx = null;
      if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });

    const h = location.hash.slice(1);
    const hi = slides.findIndex((s) => s.id === h);
    if (hi > 0) {
      cur = hi;
      requestAnimationFrame(() => slides[hi]!.scrollIntoView({ block: "start" }));
    }

    return () => {
      io.disconnect();
      offs.forEach((off) => off());
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      document.documentElement.style.overflow = "";
      window.clearTimeout(hintT);
    };
  }, [deckKey]);

  return (
    <div className="apr" ref={rootRef}>
      <header className="topnav">
        <div className="topnav-in">
          <a className="brand" href="#top" aria-label="Início">
            <img src={logo} alt="Showa" />
          </a>
          <details className="picker">
            <summary aria-label="Trocar de apresentação">
              <span className="pk-dot">{DECKS.indexOf(deck) + 1}</span>
              <span className="pk-name">{deck.title}</span>
            </summary>
            <div className="pk-menu">
              {DECKS.map((d) => (
                <a key={d.key} className="pk-opt" href={d.path} aria-current={d.key === deck.key}>
                  <b>{d.title}</b>
                  <span>{d.subtitle}</span>
                </a>
              ))}
            </div>
          </details>
          <nav aria-label="Seções">
            {deck.nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="btns">
            <button className="pill ghost" id="btnPause" type="button">
              Pausar animações
            </button>
            <button className="pill solid" id="btnPresent" type="button">
              Apresentar ▶
            </button>
          </div>
        </div>
      </header>

      <main className="deck" id="deck" data-deck={deck.key}>
        <Slides />
      </main>

      <div id="pui">
        <div className="pbar">
          {Array.from({ length: deck.total }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="hint">
          Use as setas <b>← →</b> para navegar · <b>F</b> tela cheia · <b>P</b> pausa · <b>Esc</b> sai
        </div>
        <div className="pctl">
          <button type="button" id="pPrev" aria-label="Slide anterior">←</button>
          <button type="button" id="pNext" aria-label="Próximo slide">→</button>
          <button type="button" id="pFull" aria-label="Tela cheia">⛶</button>
          <button type="button" id="pExit" aria-label="Sair do modo apresentação">✕</button>
        </div>
      </div>
    </div>
  );
}
