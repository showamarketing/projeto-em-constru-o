import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagas | Showa Marketing" },
      { name: "description", content: "Trabalhe com a Showa Marketing. Veja as vagas abertas e candidate-se." },
      { property: "og:title", content: "Vagas | Showa Marketing" },
      { property: "og:description", content: "Veja as vagas abertas na Showa Marketing e candidate-se." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const vagas = [
  { titulo: "Social Media", tipo: "Híbrido · Fortaleza", area: "Conteúdo" },
  { titulo: "Designer Gráfico", tipo: "Remoto", area: "Criação" },
  { titulo: "Gestor de Tráfego", tipo: "Híbrido · Fortaleza", area: "Performance" },
  { titulo: "Atendimento / CS", tipo: "Presencial · Fortaleza", area: "Clientes" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-bold">showa<span className="text-primary">.</span></span>
        <a href="#vagas" className="text-sm font-medium text-muted-foreground hover:text-foreground">Vagas</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Estamos contratando</p>
        <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
          Faça marketing<br />que <span className="text-primary">move marcas</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Junte-se ao time da Showa Marketing e crie campanhas que fazem diferença.
        </p>
        <a href="#vagas" className="mt-8 inline-block rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
          Ver vagas abertas
        </a>
      </section>

      <section id="vagas" className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-bold">Vagas abertas</h2>
          <ul className="mt-8 grid gap-4">
            {vagas.map((v) => (
              <li key={v.titulo} className="flex flex-col justify-between gap-4 rounded-2xl bg-card p-6 md:flex-row md:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{v.area}</span>
                  <h3 className="font-display text-xl font-bold">{v.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{v.tipo}</p>
                </div>
                <a
                  href={`mailto:vagas@showamarketing.com?subject=Candidatura: ${v.titulo}`}
                  className="rounded-full border-2 border-foreground px-5 py-2 text-center text-sm font-semibold hover:bg-foreground hover:text-background"
                >
                  Candidatar-se
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted-foreground">
        © 2026 Showa Marketing
      </footer>
    </main>
  );
}
