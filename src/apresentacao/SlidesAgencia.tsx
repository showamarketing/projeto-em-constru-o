// Slides da apresentação "Agência organizada e operação escalável".
// Gerado a partir do artefato aprovado: mantenha as classes e a estrutura,
// porque o CSS (apresentacao.css) e o modo TV (Apresentacao.tsx) dependem delas.
import { memo, type CSSProperties } from "react";
import icone from "@/assets/showa-icone.png";

export const TOTAL_SLIDES = 24;

export const Slides = memo(function Slides() {
  return (
    <>
      {/* AG 01 capa */}
      <section className="slide" id="ag-inicio">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Showa Marketing</span><span className="count">01 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Showa × Impacto Comunicação e Marketing</p>
          <h1 className="a long" style={{ "--d": "1" } as CSSProperties}>Agência organizada,<br /><span className="hl">operação escalável.</span></h1>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Pessoas, processos e produtividade. O que a Showa aprendeu de 2022 até hoje, e o que pode servir para a Impacto.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="pillars">
           <div className="pillar h1" style={{ "--d": "1" } as CSSProperties}><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M14.5 14.6c.8-.4 1.6-.6 2.5-.6 2.2 0 3.8 1.4 4.3 4" /></svg></span><span className="fs22 bb">Pessoas</span><span className="fs11 mut">quem faz, e em qual função</span></div>
           <div className="pillar h2" style={{ "--d": "2" } as CSSProperties}><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="6" height="5" rx="1.2" /><rect x="15" y="4" width="6" height="5" rx="1.2" /><rect x="9" y="15" width="6" height="5" rx="1.2" /><path d="M6 9v3h12V9M12 12v3" /></svg></span><span className="fs22 bb">Processos</span><span className="fs11 mut">como o trabalho anda</span></div>
           <div className="pillar h3" style={{ "--d": "3" } as CSSProperties}><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 19h16" /><path d="M6 15l4-4 3 3 5-6" /><path d="M15 8h3v3" /></svg></span><span className="fs22 bb">Produtividade</span><span className="fs11 mut">quanto a equipe entrega, sem sufocar</span></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Organizar a operação é o que deixa a agência crescer sem quebrar.</span></div>
       </div></div>
      </section>

      {/* AG 02 trajetória */}
      <section className="slide" id="ag-trajetoria">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">02 / 22</span></div>
        <div className="s-body wide">
         <div className="s-text" style={{ gap: "2cqi" }}>
          <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "1cqi" }}>
           <h2 className="a">De 2022 até hoje</h2>
           <p className="lede a" style={{ "--d": "1", maxWidth: "52ch" } as CSSProperties}>A experiência que a Showa acumulou, do primeiro cliente ao serviço que hoje funciona muito bem para a gente.</p>
          </div>
          <div className="viz"><div className="mock" style={{ fontSize: "calc(100cqw / 104)" }}>
           <div className="tl2">
            <div className="ln"><i></i></div>
            <div className="ms">
             <div style={{ "--d": "1" } as CSSProperties}><span className="lb up"><b>2022</b>Dois sócios saindo de outros empregos</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "2" } as CSSProperties}><span className="lb dn"><b>1º cliente</b>Uma policlínica em Santa Rita</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "3" } as CSSProperties}><span className="lb up"><b>Equipe com 4 pessoas</b>Cada um na sua função</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "4" } as CSSProperties}><span className="lb dn"><b>Indicações</b>Os primeiros clientes indicam outros</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "5" } as CSSProperties}><span className="lb up"><b>Audiovisual</b>Os clientes passam a pedir vídeo</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "6" } as CSSProperties}><span className="lb dn"><b>Marketing médico</b>O mercado em que a gente entrega melhor</span><span className="stem"></span><span className="pt"></span></div>
             <div style={{ "--d": "7" } as CSSProperties}><span className="lb up"><b>Hoje</b>Indicação e parceiros trazendo clientes</span><span className="stem"></span><span className="pt"></span></div>
            </div>
           </div>
          </div></div>
         </div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>A Showa cresceu um passo por vez, aprendendo com cada fase.</span></div>
       </div></div>
      </section>

      {/* AG 03 origem */}
      <section className="slide" id="ag-origem">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">03 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Como começou</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Tudo começou dentro de outra agência.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Trabalhando juntos, a gente via coisas que dava para resolver, mas a agência não fazia e não tinha espaço para a gente aplicar. A conversa de abrir algo próprio vinha de antes.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="duo">
           <div className="who p" style={{ "--d": "1" } as CSSProperties}><span className="ini">A</span><span className="fs16 bb">Antônio</span><span className="fs11 mut">Comercial. Sabia vender, mesmo sem resultados para mostrar ainda.</span><span className="chip">trabalhava no Pé de Fruta</span></div>
           <div className="who p" style={{ "--d": "2" } as CSSProperties}><span className="ini">V</span><span className="fs16 bb">Victor</span><span className="fs11 mut">Criação. Designer gráfico e diretor de arte.</span><span className="chip">trabalhava em outra agência</span></div>
          </div>
          <div className="notes">
           <div className="note2" style={{ "--d": "1" } as CSSProperties}>Ideias que a agência não aplicava</div>
           <div className="note2" style={{ "--d": "2" } as CSSProperties}>Problemas que a gente sabia resolver</div>
           <div className="note2" style={{ "--d": "3" } as CSSProperties}>Sem espaço para testar</div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>A Showa nasceu de problemas que a gente via e não tinha espaço para resolver.</span></div>
       </div></div>
      </section>

      {/* AG 04 escutar primeiro */}
      <section className="slide" id="ag-escutar">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">04 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O primeiro cliente</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Uma policlínica deu espaço a dois jovens.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A gente tinha 22 e 23 anos, sem cases para mostrar. O dono pediu que a gente ouvisse todos os problemas dele antes de trazer qualquer proposta.</p>
         </div>
         <div className="viz"><div className="mock">
          <p className="quote a" style={{ "--d": "1" } as CSSProperties}>Escute primeiro todos os problemas que eu tenho. Depois você me traz a solução.</p>
          <div className="qby a" style={{ "--d": "2" } as CSSProperties}>Dono da policlínica, em Santa Rita</div>
          <div className="steps3">
           <div className="st3 p" style={{ "--d": "3" } as CSSProperties}><span className="n">PASSO 1</span><span className="fs14 b">Ouvir</span><span className="fs10 mut">Todos os relatos, sem oferecer nada</span></div>
           <div className="st3 p" style={{ "--d": "4" } as CSSProperties}><span className="n">PASSO 2</span><span className="fs14 b">Analisar</span><span className="fs10 mut">Sentar juntos e montar o projeto</span></div>
           <div className="st3 on p" style={{ "--d": "5" } as CSSProperties}><span className="n">PASSO 3</span><span className="fs14 b">Propor</span><span className="fs10 mut">Uma solução para os problemas dele</span></div>
          </div>
          <div className="ticket a" style={{ "--d": "6" } as CSSProperties}><span className="fs12 b">Ticket do primeiro projeto</span><span className="v">quase R$ 2.000</span></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Antes de oferecer, escute. A solução vem do problema do cliente.</span></div>
       </div></div>
      </section>

      {/* AG 05 fazíamos tudo */}
      <section className="slide" id="ag-tudo">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">05 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O primeiro contrato</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um cliente, todos os serviços.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A gente respondia pelo marketing inteiro da clínica. Foi muito trabalho de uma vez, e virou a bagagem para aprender a coordenar nesse mercado.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="cloud">
           <span className="chip core" style={{ "--d": "0" } as CSSProperties}>Policlínica</span>
           <span className="chip" style={{ "--d": "1" } as CSSProperties}>Design gráfico</span>
           <span className="chip" style={{ "--d": "2" } as CSSProperties}>Social media</span>
           <span className="chip" style={{ "--d": "3" } as CSSProperties}>Stories todo dia</span>
           <span className="chip" style={{ "--d": "4" } as CSSProperties}>Gravações</span>
           <span className="chip" style={{ "--d": "5" } as CSSProperties}>Adesivos</span>
           <span className="chip" style={{ "--d": "6" } as CSSProperties}>Placas na clínica</span>
           <span className="chip" style={{ "--d": "7" } as CSSProperties}>Outdoor</span>
           <span className="chip" style={{ "--d": "8" } as CSSProperties}>Google Ads</span>
           <span className="chip" style={{ "--d": "9" } as CSSProperties}>Meta Ads</span>
           <span className="chip" style={{ "--d": "10" } as CSSProperties}>Landing page</span>
           <span className="chip" style={{ "--d": "11" } as CSSProperties}>Comercial no WhatsApp</span>
           <span className="chip" style={{ "--d": "12" } as CSSProperties}>Rádio</span>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Fazer tudo para um cliente ensinou a coordenar, e também mostrou o limite.</span></div>
       </div></div>
      </section>

      {/* AG 06 equipe com 4 pessoas */}
      <section className="slide" id="ag-equipe">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">06 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">A primeira equipe</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Quatro pessoas, cada uma numa função.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Eu não quis fazer o design para não ficar preso no operacional. A ideia, desde o começo, era coordenar e ter um especialista em cada parte.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="org">
           <div className="org-row">
            <div className="ocard lead p" style={{ "--d": "1" } as CSSProperties}><span className="av wht"></span><div className="col"><span className="fs13 b">Victor</span><span className="fs10 mut">Coordenação e organização</span></div></div>
            <div className="ocard lead p" style={{ "--d": "2" } as CSSProperties}><span className="av red"></span><div className="col"><span className="fs13 b">Antônio</span><span className="fs10 mut">Comercial e atendimento</span></div></div>
           </div>
           <div className="org-row">
            <div className="ocard p" style={{ "--d": "3" } as CSSProperties}><span className="av"></span><div className="col"><span className="fs13 b">Social media</span><span className="fs10 mut">A primeira contratação</span></div></div>
            <div className="ocard p" style={{ "--d": "4" } as CSSProperties}><span className="av blu"></span><div className="col"><span className="fs13 b">Designer gráfico</span><span className="fs10 mut">Freelancer que já atendia a Impacto</span></div></div>
           </div>
           <span className="org-note a" style={{ "--d": "5" } as CSSProperties}><span className="dot"></span>Sócios fora da produção, especialistas no operacional</span>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Desde o começo, cada pessoa numa função, e a coordenação fora do operacional.</span></div>
       </div></div>
      </section>

      {/* AG 07 indicações */}
      <section className="slide" id="ag-indicacoes">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">07 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Os primeiros clientes</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>A operação começou com a Impacto.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A Impacto cuidava da nossa contabilidade e a gente cuidava das peças, agora como agência: a gente pensava os materiais. Funcionou, e vieram as primeiras indicações.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Clube Cabo Branco, indicado pelo Vinícius: captação de alunos para a escolinha de futsal e futebol</li><li>Amigos e ex-clientes de outros trabalhos</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw" viewBox="0 0 520 400" role="img" aria-label="Rede de indicações: Showa ligada à Impacto e à São Roque; a Impacto indica o Clube Cabo Branco; amigos e ex-clientes indicam novos clientes">
           <path d="M260 200 L120 90" className="flow-dash" style={{ stroke: "var(--red-hi)", strokeWidth: "2", fill: "none" }} />
           <path d="M260 200 L120 310" className="flow-dash" style={{ stroke: "var(--line2)", strokeWidth: "2", fill: "none" }} />
           <path d="M260 200 L410 200" className="flow-dash" style={{ stroke: "var(--line2)", strokeWidth: "2", fill: "none" }} />
           <path d="M120 90 C 260 20, 380 40, 420 90" className="flow-dash" style={{ stroke: "var(--red-hi)", strokeWidth: "2", fill: "none" }} />
           <path d="M410 200 L440 320" className="flow-dash" style={{ stroke: "var(--line2)", strokeWidth: "2", fill: "none" }} />
           <circle cx="260" cy="200" r="46" style={{ fill: "var(--red)", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <text x="260" y="206" textAnchor="middle" style={{ fill: "#fff", fontSize: "17px", fontWeight: "700" }}>Showa</text>
           <rect x="40" y="62" width="160" height="56" rx="28" style={{ fill: "var(--panel2)", stroke: "var(--red-hi)" }} />
           <text x="120" y="88" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Impacto</text>
           <text x="120" y="105" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>Soluções Contábeis</text>
           <rect x="40" y="282" width="160" height="56" rx="28" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} />
           <text x="120" y="315" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>São Roque</text>
           <rect x="345" y="62" width="160" height="56" rx="28" style={{ fill: "rgba(167,46,33,.18)", stroke: "var(--red-hi)" }} />
           <text x="425" y="88" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Clube Cabo Branco</text>
           <text x="425" y="105" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>escolinha de futsal e futebol</text>
           <text x="270" y="38" textAnchor="middle" style={{ fill: "var(--red-hi)", fontSize: "11px", fontWeight: "600" }}>indicação do Vinícius</text>
           <rect x="330" y="172" width="160" height="56" rx="28" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} />
           <text x="410" y="197" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Amigos e</text>
           <text x="410" y="214" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>ex-clientes</text>
           <rect x="380" y="316" width="120" height="44" rx="22" style={{ fill: "none", stroke: "var(--line2)", strokeDasharray: "4 4" }} />
           <text x="440" y="343" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "12px" }}>novos clientes</text>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Cliente bem atendido indica. As primeiras portas abriram por indicação.</span></div>
       </div></div>
      </section>

      {/* AG 08 sem câmera */}
      <section className="slide" id="ag-audiovisual">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">08 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">A maior dificuldade</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Os clientes pediram vídeo. A gente não tinha câmera.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Saímos dos pacotes de posts para roteiro e produção audiovisual. Só que tudo começou do zero: dois celulares Android e nenhum equipamento.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="gear">
           <div className="gi" style={{ "--d": "1" } as CSSProperties}><span className="x">✕</span><div className="col"><span className="fs14 b">Câmera</span><span className="fs10 mut">nenhuma</span></div></div>
           <div className="gi" style={{ "--d": "2" } as CSSProperties}><span className="x">✕</span><div className="col"><span className="fs14 b">Microfone</span><span className="fs10 mut">nenhum</span></div></div>
           <div className="gi" style={{ "--d": "3" } as CSSProperties}><span className="x">✕</span><div className="col"><span className="fs14 b">Iluminação</span><span className="fs10 mut">nenhuma</span></div></div>
           <div className="gi" style={{ "--d": "4" } as CSSProperties}><span className="x">✕</span><div className="col"><span className="fs14 b">iPhone</span><span className="fs10 mut">nenhum</span></div></div>
           <div className="gi has" style={{ "--d": "5" } as CSSProperties}><span className="x">2</span><div className="col"><span className="fs14 b">Celulares Android</span><span className="fs10 mut">o que tinha</span></div></div>
           <div className="gi ok" style={{ "--d": "6" } as CSSProperties}><span className="x">✓</span><div className="col"><span className="fs14 b">1º investimento</span><span className="fs10 mut">uma câmera de geração antiga</span></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Os clientes mudaram o que pediam antes de a gente estar pronto.</span></div>
       </div></div>
      </section>

      {/* AG 09 pousada */}
      <section className="slide" id="ag-camera">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">09 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">A sacada</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um contrato pago com uma câmera.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Uma pousada pagou um ano de serviço comprando o nosso kit de câmera. Pela distância, a gente fez uns 7 ou 8 meses sem o resultado que queria. Ele não pediu reembolso e a parceria continuou.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="deal">
           <div className="dbox p" style={{ "--d": "1" } as CSSProperties}><span className="fs10 mut">O cliente pagou</span><span className="fs22 bb">1 ano</span><span className="fs12">de contrato, adiantado</span></div>
           <span className="eq">=</span>
           <div className="dbox cam p" style={{ "--d": "3" } as CSSProperties}>
            <svg viewBox="0 0 120 80" role="img" aria-label="Câmera"><rect x="8" y="20" width="104" height="54" rx="10" style={{ fill: "var(--panel3)", stroke: "var(--line2)" }} /><rect x="40" y="10" width="34" height="14" rx="4" style={{ fill: "var(--panel3)", stroke: "var(--line2)" }} /><circle cx="60" cy="47" r="20" style={{ fill: "#0a0a0a", stroke: "var(--red-hi)", strokeWidth: "3" }} /><circle cx="60" cy="47" r="9" style={{ fill: "#1d2a3a" }} /><circle cx="96" cy="31" r="4" style={{ fill: "var(--red-hi)" }} /></svg>
            <span className="fs18 bb" style={{ textAlign: "center" }}>Kit Canon R10</span><span className="fs10 mut" style={{ textAlign: "center" }}>completo</span>
           </div>
          </div>
          <div className="months">
           <i style={{ "--d": "1" } as CSSProperties}></i><i style={{ "--d": "2" } as CSSProperties}></i><i style={{ "--d": "3" } as CSSProperties}></i><i style={{ "--d": "4" } as CSSProperties}></i><i style={{ "--d": "5" } as CSSProperties}></i><i style={{ "--d": "6" } as CSSProperties}></i><i style={{ "--d": "7" } as CSSProperties}></i><i style={{ "--d": "8" } as CSSProperties}></i><i className="off" style={{ "--d": "9" } as CSSProperties}></i><i className="off" style={{ "--d": "10" } as CSSProperties}></i><i className="off" style={{ "--d": "11" } as CSSProperties}></i><i className="off" style={{ "--d": "12" } as CSSProperties}></i>
          </div>
          <div className="row fs10 mut" style={{ justifyContent: "space-between", marginTop: ".6em" }}><span>cerca de 8 meses entregues</span><span>sem pedido de reembolso</span></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Um parceiro que acreditou mudou a estrutura da agência.</span></div>
       </div></div>
      </section>

      {/* AG 10 comercial estoura */}
      <section className="slide" id="ag-comercial">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">10 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Depois da câmera</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>O comercial estourou.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Veio uma sequência de contratos de produção audiovisual. Para dar conta, a gente precisou de uma pessoa só para editar vídeos.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="stack">
           <div className="ct" style={{ "--d": "1" } as CSSProperties}><span className="ic2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg></span><div className="col"><span className="fs13 b">Novo contrato</span><span className="fs10 mut">produção audiovisual</span></div><span className="chip fs9" style={{ marginLeft: "auto" }}>fechado</span></div>
           <div className="ct" style={{ "--d": "2" } as CSSProperties}><span className="ic2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg></span><div className="col"><span className="fs13 b">Novo contrato</span><span className="fs10 mut">produção audiovisual</span></div><span className="chip fs9" style={{ marginLeft: "auto" }}>fechado</span></div>
           <div className="ct" style={{ "--d": "3" } as CSSProperties}><span className="ic2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg></span><div className="col"><span className="fs13 b">Novo contrato</span><span className="fs10 mut">produção audiovisual</span></div><span className="chip fs9" style={{ marginLeft: "auto" }}>fechado</span></div>
           <div className="ct" style={{ "--d": "4" } as CSSProperties}><span className="ic2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg></span><div className="col"><span className="fs13 b">Novo contrato</span><span className="fs10 mut">produção audiovisual</span></div><span className="chip fs9" style={{ marginLeft: "auto" }}>fechado</span></div>
           <div className="ct hire" style={{ "--d": "6" } as CSSProperties}><span className="ic2"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6" /></svg></span><div className="col"><span className="fs13 bb">Nova vaga: editor de vídeo</span><span className="fs10" style={{ color: "#555" }}>uma pessoa só para edição</span></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Com estrutura, o comercial deslanchou e pediu gente nova na equipe.</span></div>
       </div></div>
      </section>

      {/* AG 11 distância */}
      <section className="slide" id="ag-distancia">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">11 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">A primeira dor de cabeça</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>O plano esbarrou na distância.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>O ideal era eu ficar com os vídeos e o Antônio com anúncios e comercial. Mas eu moro em Santa Rita e ele em João Pessoa, e o deslocamento não cabia no ticket da época. A gente reorganizou.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw" viewBox="0 0 520 150" role="img" aria-label="Santa Rita e João Pessoa ligadas por uma estrada">
           <path id="road" d="M70 95 C 180 20, 330 150, 450 70" style={{ fill: "none", stroke: "var(--line2)", strokeWidth: "10", strokeLinecap: "round" }} />
           <path d="M70 95 C 180 20, 330 150, 450 70" className="flow-dash" style={{ fill: "none", stroke: "var(--mut)", strokeWidth: "2" }} />
           <circle r="7" style={{ fill: "var(--red-hi)" }}><animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear"><mpath href="#road" /></animateMotion></circle>
           <circle cx="70" cy="95" r="12" style={{ fill: "var(--red)" }} /><text x="70" y="132" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Santa Rita</text><text x="70" y="146" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>Victor</text>
           <circle cx="450" cy="70" r="12" style={{ fill: "var(--red)" }} /><text x="450" y="107" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>João Pessoa</text><text x="450" y="121" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>Antônio</text>
          </svg>
          <div className="plan">
           <div className="pcol a" style={{ "--d": "2" } as CSSProperties}><span className="fs10 dim" style={{ letterSpacing: ".14em" }}>O PLANO</span><div className="row"><b>Victor</b><span className="mut">vídeos</span></div><div className="row"><b>Antônio</b><span className="mut">anúncios, comercial e atendimento</span></div></div>
           <div className="pcol real a" style={{ "--d": "4" } as CSSProperties}><span className="fs10 red" style={{ letterSpacing: ".14em" }}>O QUE FUNCIONOU</span><div className="row"><b>Antônio</b><span>vai às gravações</span></div><div className="row"><b>Victor</b><span>design em casa e alguns vídeos</span></div><div className="row"><b>Fora</b><span>videomaker terceirizado</span></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O plano ideal precisa caber na realidade de quem executa.</span></div>
       </div></div>
      </section>

      {/* AG 12 social media */}
      <section className="slide" id="ag-delegar-cedo">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">12 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Social media</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Delegue o que você não gosta de fazer.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Social media sempre foi essencial, e nenhum dos dois sócios gostava da função. Eu já tinha feito em 2021, sem ChatGPT, na marra. Então a gente sempre investiu em ter alguém para isso.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="role a" style={{ "--d": "1" } as CSSProperties}>
           <div className="row"><span className="av"></span><div className="col"><span className="fs16 bb">Social media</span><span className="fs10 mut">uma função que a gente faz questão de ter</span></div></div>
           <ul><li>Planejamento de conteúdo</li><li>Postagens</li><li>Briefing para o design</li><li>Roteiros</li></ul>
          </div>
          <div className="say a" style={{ "--d": "3" } as CSSProperties}><p>Prefiro tirar menos dinheiro e pagar alguém que faça muito bem, porque gosta e sabe fazer.</p><span>Não é a minha praia. Por isso a gente investe nessa função.</span></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Delegue cedo o que você não gosta ou não faz bem.</span></div>
       </div></div>
      </section>

      {/* AG 13 carro andando */}
      <section className="slide" id="ag-carro-andando">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">13 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Corrigir com o carro andando</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Vender o que não sabe entregar custa caro.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>O cliente não tem que esperar a gente aprender. Ele já paga querendo o resultado. Quando dá errado, a relação acaba e a indicação some.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="chain">
           <div className="lk" style={{ "--d": "1" } as CSSProperties}><span className="n">1</span><span className="fs13">Oferece um serviço que ainda não domina</span></div>
           <span className="lk-arr" style={{ "--d": "1" } as CSSProperties}>↓</span>
           <div className="lk" style={{ "--d": "2" } as CSSProperties}><span className="n">2</span><span className="fs13">Tenta aprender enquanto entrega</span></div>
           <span className="lk-arr" style={{ "--d": "2" } as CSSProperties}>↓</span>
           <div className="lk" style={{ "--d": "3" } as CSSProperties}><span className="n">3</span><span className="fs13">A entrega sai abaixo do esperado</span></div>
           <span className="lk-arr" style={{ "--d": "3" } as CSSProperties}>↓</span>
           <div className="lk" style={{ "--d": "4" } as CSSProperties}><span className="n">4</span><span className="fs13">O cliente corta a relação e não indica</span></div>
           <span className="lk-arr" style={{ "--d": "4" } as CSSProperties}>↓</span>
           <div className="lk" style={{ "--d": "5" } as CSSProperties}><span className="n">5</span><span className="fs13 b">A agência se queima no mercado</span></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O cliente paga pelo resultado agora, não pelo seu aprendizado.</span></div>
       </div></div>
      </section>

      {/* AG 14 nicho */}
      <section className="slide" id="ag-nicho">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">14 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O destaque</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um mercado começou a se destacar.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A gente atendia todos os mercados, mas no marketing médico o resultado era melhor. Já tínhamos mais experiência e entendíamos as regras do CFM.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="mk a" style={{ "--d": "1" } as CSSProperties}>
           <span className="chip">Contabilidade</span><span className="chip">Escolinha de futebol</span><span className="chip">Pousada</span><span className="chip med">Clínicas</span><span className="chip">Comércio</span><span className="chip med">Consultórios</span><span className="chip">Serviços</span><span className="chip">Restaurantes</span>
          </div>
          <svg className="funnel" viewBox="0 0 520 90" aria-hidden="true"><path d="M20 6 H500 L300 84 H220 Z" style={{ fill: "rgba(167,46,33,.12)", stroke: "rgba(212,71,58,.45)" }} /><path d="M260 20 V70" className="flow-dash" style={{ stroke: "var(--red-hi)", strokeWidth: "2" }} /></svg>
          <div className="winner p" style={{ "--d": "4" } as CSSProperties}>
           <span className="av red lg"></span>
           <div className="col"><span className="fs22 bb">Marketing médico</span>
            <div className="chips"><span className="chip">Mais resultado</span><span className="chip">Mais experiência</span><span className="chip">Regras do CFM</span></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Descubra onde você entrega melhor e concentre ali.</span></div>
       </div></div>
      </section>

      {/* AG 15 volante de indicação */}
      <section className="slide" id="ag-resultado">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">15 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Recompensa</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Resultado bom vira indicação.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Cada cliente bem atendido indica outro. Começou a chover indicação, mesmo com a nossa rede social praticamente parada. Os clientes chegam no ritmo que a gente consegue atender.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw wheel" viewBox="0 0 520 400" role="img" aria-label="Ciclo: entregar resultado, cliente indica, novo cliente chega, equipe atende bem">
           <circle id="wh" cx="260" cy="200" r="130" style={{ fill: "none", stroke: "var(--line2)", strokeWidth: "2" }} />
           <path d="M260 70 A130 130 0 1 1 259.9 70" id="whp" style={{ fill: "none" }} />
           <circle cx="260" cy="200" r="130" className="flow-dash" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2", opacity: ".45" }} />
           <circle r="8" style={{ fill: "var(--red-hi)" }}><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#whp" /></animateMotion></circle>
           <circle cx="260" cy="200" r="58" style={{ fill: "var(--red)", opacity: ".9" }} />
           <text x="260" y="196" textAnchor="middle" style={{ fill: "#fff", fontSize: "15px", fontWeight: "700" }}>Indicação</text>
           <text x="260" y="215" textAnchor="middle" style={{ fill: "rgba(255,255,255,.8)", fontSize: "11px" }}>sem anúncio próprio</text>
           <rect x="180" y="46" width="160" height="48" rx="24" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="260" y="75" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Entregar resultado</text>
           <rect x="350" y="176" width="160" height="48" rx="24" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="430" y="205" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>O cliente indica</text>
           <rect x="180" y="306" width="160" height="48" rx="24" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="260" y="335" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Chega um novo cliente</text>
           <rect x="10" y="176" width="160" height="48" rx="24" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="90" y="205" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>A equipe dá conta</text>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Resultado vira indicação. Indicação vira crescimento.</span></div>
       </div></div>
      </section>

      {/* AG 16 dizer não */}
      <section className="slide" id="ag-dizer-nao">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">16 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O diferencial</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Quando a gente parou de aceitar tudo, a equipe evoluiu.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>No começo, a gente aceitava clientes que nem sabia se ia conseguir atender, e de fato não conseguia. Ir com calma, devagar e de forma certeira foi o que mudou o jogo.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="leads">
           <div className="lead yes" style={{ "--d": "1" } as CSSProperties}><span className="av red sm"></span><div className="col"><span className="fs12 b t">Clínica de especialidades</span><span className="fs9 mut">audiovisual e tráfego</span></div><span className="tag2">dá para entregar</span></div>
           <div className="lead no" style={{ "--d": "2" } as CSSProperties}><span className="av wht sm"></span><div className="col"><span className="fs12 b t">Pedido fora do nosso foco</span><span className="fs9 mut">serviço que a gente não domina</span></div><span className="tag2">não agora</span></div>
           <div className="lead yes" style={{ "--d": "3" } as CSSProperties}><span className="av red sm"></span><div className="col"><span className="fs12 b t">Consultório indicado por cliente</span><span className="fs9 mut">conteúdo de autoridade</span></div><span className="tag2">dá para entregar</span></div>
           <div className="lead no" style={{ "--d": "4" } as CSSProperties}><span className="av wht sm"></span><div className="col"><span className="fs12 b t">Prazo que a equipe não cobre</span><span className="fs9 mut">agenda já cheia</span></div><span className="tag2">não agora</span></div>
           <div className="lead yes" style={{ "--d": "5" } as CSSProperties}><span className="av red sm"></span><div className="col"><span className="fs12 b t">Médico vindo de parceiro</span><span className="fs9 mut">marketing completo</span></div><span className="tag2">dá para entregar</span></div>
          </div>
          <p className="fs9 dim" style={{ margin: "1em 0 0" }}>Exemplos ilustrativos</p>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Aceitar só o que dá para entregar foi o que fez a equipe evoluir.</span></div>
       </div></div>
      </section>

      {/* AG 17 parcerias */}
      <section className="slide" id="ag-parcerias">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">17 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Parcerias</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Empresas parceiras que indicam a gente.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A empresa de atendimento e CRM da Ingrid virou parceira. Ela indicou médicos com quem já trabalhava e passou parte do marketing para a Showa. É uma troca.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw" viewBox="0 0 520 380" role="img" aria-label="Troca de indicações entre a Showa e a parceira de atendimento e CRM">
           <path id="pa1" d="M150 150 C 230 70, 290 70, 370 150" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <path d="M362 138 L372 152 L356 154" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <path id="pa2" d="M370 230 C 290 310, 230 310, 150 230" style={{ fill: "none", stroke: "var(--green)", strokeWidth: "2" }} />
           <path d="M158 242 L148 228 L164 226" style={{ fill: "none", stroke: "var(--green)", strokeWidth: "2" }} />
           <circle r="6" style={{ fill: "var(--red-hi)" }}><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#pa1" /></animateMotion></circle>
           <circle r="6" style={{ fill: "var(--green)" }}><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite"><mpath href="#pa2" /></animateMotion></circle>
           <circle cx="110" cy="190" r="72" style={{ fill: "var(--red)", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <text x="110" y="196" textAnchor="middle" style={{ fill: "#fff", fontSize: "18px", fontWeight: "700" }}>Showa</text>
           <circle cx="410" cy="190" r="72" style={{ fill: "var(--panel2)", stroke: "var(--line2)", strokeWidth: "2" }} />
           <text x="410" y="180" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Parceira de</text>
           <text x="410" y="198" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>atendimento</text>
           <text x="410" y="216" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>e CRM</text>
           <text x="260" y="70" textAnchor="middle" style={{ fill: "var(--red-hi)", fontSize: "12px", fontWeight: "600" }}>a Showa indica atendimento e CRM</text>
           <text x="260" y="330" textAnchor="middle" style={{ fill: "var(--green)", fontSize: "12px", fontWeight: "600" }}>a parceira indica médicos para o marketing</text>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Parceiros certos indicam e recebem indicação.</span></div>
       </div></div>
      </section>

      {/* AG 18 organização interna */}
      <section className="slide" id="ag-pessoas">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">18 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Organização interna</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Não sufocar quem trabalha com a gente.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>No começo a ideia era trazer uma pessoa para cuidar de todo mundo. A gente largou isso. Hoje vale mais um profissional bom cuidando de dois ou três clientes, cada um no seu freelancer.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="load">
           <div className="lcol a" style={{ "--d": "1" } as CSSProperties}>
            <span className="fs10 red" style={{ letterSpacing: ".14em" }}>COMO ERA</span>
            <span className="fs14 b">Uma pessoa para todos</span>
            <div className="lrow"><span className="av wht"></span><div className="dots"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="lmeter"><i style={{ width: "100%", background: "var(--red-hi)" }}></i></div>
            <span className="fs10 mut">sobrecarga e entrega no automático</span>
           </div>
           <div className="lcol good a" style={{ "--d": "2" } as CSSProperties}>
            <span className="fs10 grn" style={{ letterSpacing: ".14em" }}>COMO É</span>
            <span className="fs14 b">Um bom profissional para poucos</span>
            <div className="lrow"><span className="av"></span><div className="dots"><i></i><i></i><i></i></div></div>
            <div className="lrow"><span className="av blu"></span><div className="dots"><i></i><i></i></div></div>
            <div className="lrow"><span className="av amb"></span><div className="dots"><i></i><i></i><i></i></div></div>
            <div className="lmeter"><i style={{ width: "65%", background: "var(--green)" }}></i></div>
            <span className="fs10 mut">tempo para fazer bem feito</span>
           </div>
           <div className="perk p" style={{ "--d": "4" } as CSSProperties}><span className="perk-ic">✓</span><span className="fs14 bb">Pagamento proporcional, sem horário fixo.</span></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Melhor um profissional bom para poucos clientes do que um para todos.</span></div>
       </div></div>
      </section>

      {/* AG 20 impacto hoje — oculta do público (hidden). Para mostrar de novo, tirar o "hidden". */}
      <section className="slide" id="ag-tempo-criar" hidden>
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">20 / 24</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Trazendo para a Impacto</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Quem só produz não tem tempo de criar.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A Impacto está na fase em que a Showa esteve: querer entregar muito sem ter braço. Nossa área pede criatividade, e isso exige tempo para ver referências, conhecer o cliente e o mercado.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="weeks">
           <div className="wk a" style={{ "--d": "1" } as CSSProperties}>
            <span className="fs12 b">Semana no automático</span>
            <div className="wgrid"><b>Seg</b><b>Ter</b><b>Qua</b><b>Qui</b><b>Sex</b>
             <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <span className="fs10 mut">100% produzindo</span>
           </div>
           <div className="wk after a" style={{ "--d": "2" } as CSSProperties}>
            <span className="fs12 b">Semana com tempo para criar</span>
            <div className="wgrid"><b>Seg</b><b>Ter</b><b>Qua</b><b>Qui</b><b>Sex</b>
             <i className="r" style={{ "--d": "1" } as CSSProperties}></i><i></i><i></i><i className="c" style={{ "--d": "2" } as CSSProperties}></i><i></i><i></i><i></i><i className="m" style={{ "--d": "3" } as CSSProperties}></i><i></i><i className="r" style={{ "--d": "4" } as CSSProperties}></i><i></i><i className="c" style={{ "--d": "5" } as CSSProperties}></i><i></i><i></i><i></i><i></i><i></i><i></i><i className="m" style={{ "--d": "6" } as CSSProperties}></i><i></i>
            </div>
            <div className="legend"><span style={{ "--c": "#2d6cdf" } as CSSProperties}>referências</span><span style={{ "--c": "var(--green)" } as CSSProperties}>café com o cliente</span><span style={{ "--c": "var(--amber)" } as CSSProperties}>mercado e concorrentes</span></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Quem passa o dia só produzindo não tem tempo para criar.</span></div>
       </div></div>
      </section>

      {/* AG 21 gargalo — oculta do público (hidden). Para mostrar de novo, tirar o "hidden". */}
      <section className="slide" id="ag-gargalo" hidden>
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">21 / 24</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O gargalo</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Muita gente fazendo a mesma função.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A demanda de design gráfico é grande, e várias pessoas fazem arte, inclusive quem não tem ligação com a área. Isso trava o fluxo de todo mundo.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw bneck" viewBox="0 0 520 380" role="img" aria-label="Audiovisual, gestão, estagiários e design convergindo para artes">
           <path d="M170 60 C 260 60, 280 190, 360 190" className="flow-dash" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <path d="M170 150 C 250 150, 290 190, 360 190" className="flow-dash" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <path d="M170 240 C 250 240, 290 190, 360 190" className="flow-dash" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2" }} />
           <path d="M170 330 C 260 330, 280 190, 360 190" className="flow-dash" style={{ fill: "none", stroke: "var(--line2)", strokeWidth: "2" }} />
           <rect x="10" y="34" width="160" height="52" rx="26" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="90" y="58" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Audiovisual</text><text x="90" y="74" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>também faz arte</text>
           <rect x="10" y="124" width="160" height="52" rx="26" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="90" y="148" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Gestão e cliente</text><text x="90" y="164" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>também faz arte</text>
           <rect x="10" y="214" width="160" height="52" rx="26" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="90" y="238" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Estagiários</text><text x="90" y="254" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>fazem arte</text>
           <rect x="10" y="304" width="160" height="52" rx="26" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="90" y="328" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "13px", fontWeight: "600" }}>Design</text><text x="90" y="344" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "10.5px" }}>faz arte</text>
           <rect x="360" y="150" width="150" height="80" rx="18" style={{ fill: "rgba(167,46,33,.25)", stroke: "var(--red-hi)", strokeWidth: "1.5" }} />
           <text x="435" y="186" textAnchor="middle" style={{ fill: "#fff", fontSize: "17px", fontWeight: "700" }}>Artes</text>
           <text x="435" y="206" textAnchor="middle" style={{ fill: "var(--red-hi)", fontSize: "11px", fontWeight: "600" }}>fila travada</text>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Quando todo mundo faz arte, ninguém faz o resto direito.</span></div>
       </div></div>
      </section>

      {/* AG 22 cada um no seu */}
      <section className="slide" id="ag-funcao-certa">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">19 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O talento certo</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Cada um na função em que entrega mais.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Quem é muito bom em vídeo e passa o tempo enviando material e fazendo arte no improviso deixa de entregar mais vídeos por dia. Quem gerencia o cliente precisa delegar artes e envios.</p>
         </div>
         <div className="viz"><div className="mock">
          <table className="swap">
           <thead><tr><th>Função</th><th>Hoje</th><th>Ideal</th></tr></thead>
           <tbody>
            <tr style={{ "--d": "1" } as CSSProperties}><td>Audiovisual</td><td className="now"><s>artes e envio de material</s></td><td className="ideal">captação e edição, mais vídeos por dia</td></tr>
            <tr style={{ "--d": "2" } as CSSProperties}><td>Gestão e cliente</td><td className="now"><s>fazer artes e enviar posts</s></td><td className="ideal">acompanhar o cliente e delegar</td></tr>
            <tr style={{ "--d": "3" } as CSSProperties}><td>Estagiários</td><td className="now">artes sem acompanhamento</td><td className="ideal">artes com briefing e revisão</td></tr>
           </tbody>
          </table>
          <div className="say a" style={{ "--d": "5", marginTop: "1em", padding: "1.2em 1.4em" } as CSSProperties}><p style={{ fontSize: "1.5em" }}>Três artes no improviso podem custar dois vídeos a mais no dia.</p></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Cada talento na função em que ele entrega mais.</span></div>
       </div></div>
      </section>

      {/* AG 23 reunião de equipe */}
      <section className="slide" id="ag-reunioes">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">20 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Dica de gestão</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Reúna a equipe e veja quem entrega melhor.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Não basta saber o que cada um gosta de fazer. Converse e marque reuniões para entender o que cada pessoa entrega com mais qualidade e mais rápido.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Entrega vídeo mais rápido? Mais volume de vídeo.</li><li>Faz arte muito bem? Mais volume de arte.</li><li>Ainda não se destaca? Outra função ou apoio ao processo.</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="meet a" style={{ "--d": "1" } as CSSProperties}>
           <div className="row" style={{ justifyContent: "space-between" }}><div className="col"><span className="fs14 bb">Reunião de equipe</span><span className="fs10 mut">o que cada um entrega melhor e mais rápido</span></div><div className="dc" style={{ flex: "none" }}><span className="av talk sm"></span><span className="av blu sm"></span><span className="av amb sm"></span></div></div>
           <div className="mt-row mt-head"><span></span><span>Vídeo</span><span>Arte</span><span>Decisão</span></div>
           <div className="mt-row" style={{ "--d": "2" } as CSSProperties}><span className="av"></span><span className="lvl"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i></span><span className="lvl"><i className="on"></i><i className="on"></i><i></i><i></i></span><span className="dec v">Mais vídeos</span></div>
           <div className="mt-row" style={{ "--d": "3" } as CSSProperties}><span className="av blu"></span><span className="lvl"><i className="on"></i><i className="on"></i><i></i><i></i></span><span className="lvl"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i></span><span className="dec v">Mais artes</span></div>
           <div className="mt-row" style={{ "--d": "4" } as CSSProperties}><span className="av amb"></span><span className="lvl"><i className="on"></i><i className="on"></i><i></i><i></i></span><span className="lvl"><i className="on"></i><i></i><i></i><i></i></span><span className="dec s">Apoio ao processo</span></div>
           <span className="fs9 dim">Exemplo ilustrativo. Cada barra soma qualidade e velocidade de entrega.</span>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Quem entrega melhor e mais rápido produz mais daquilo. É assim que os bons se destacam.</span></div>
       </div></div>
      </section>

      {/* AG 19 ferramentas */}
      <section className="slide" id="ag-processos">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">21 / 22</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Processos</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Cada ferramenta tem uma função.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>É obrigação de todo mundo da equipe seguir esse fluxo. Se alguém falha, a gente vai atrás para corrigir.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Trello: a rotina de cada um</li><li>WhatsApp: a comunicação do dia a dia</li><li>Discord: as reuniões</li><li>Google Drive: todos os materiais</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="tools4">
           <div className="t4 p" style={{ "--d": "1" } as CSSProperties}><div className="hd"><span className="lg" style={{ background: "#1868db" }}>T</span><span className="fs12 b">Trello</span><span className="dsc">rotina</span></div>
            <div className="trello"><div><span>A fazer</span><i></i><i></i><i></i></div><div><span>Fazendo</span><i></i><i className="mv"></i></div><div><span>Feito</span><i></i><i></i></div></div></div>
           <div className="t4 p" style={{ "--d": "2" } as CSSProperties}><div className="hd"><span className="lg" style={{ background: "#1fa855" }}>W</span><span className="fs12 b">WhatsApp</span><span className="dsc">comunicação</span></div>
            <div className="wa"><span className="in">O vídeo do cliente já foi aprovado?</span><span className="out">Aprovado, está no Drive.</span></div></div>
           <div className="t4 p" style={{ "--d": "3" } as CSSProperties}><div className="hd"><span className="lg" style={{ background: "#5865f2" }}>D</span><span className="fs12 b">Discord</span><span className="dsc">reuniões</span></div>
            <div className="dc"><span className="av talk"></span><span className="av red"></span><span className="av blu"></span><span className="av amb"></span><span className="fs10 mut">Reunião de pauta</span></div></div>
           <div className="t4 p" style={{ "--d": "4" } as CSSProperties}><div className="hd"><span className="lg" style={{ background: "#2a2a2a", color: "#f4b400" }}>▲</span><span className="fs12 b">Google Drive</span><span className="dsc">materiais</span></div>
            <div className="drv"><span>Clientes / Roteiros</span><span>Clientes / Vídeos editados</span><span>Clientes / Artes aprovadas</span></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Cada ferramenta tem uma função, e usar todas é obrigação de todos.</span></div>
       </div></div>
      </section>

      {/* AG 24 delegar */}
      <section className="slide" id="ag-delegar">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agência organizada</span><span className="count">22 / 22</span></div>
        <div className="s-body wide">
         <div className="closing">
          <img className="p" src={icone} alt="" style={{ width: "clamp(56px,6cqi,84px)", borderRadius: "24%" }} />
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Na escala, delegar é <span className="hl">necessidade.</span></h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A Showa também demorou para aprender a delegar. Com os bons produzindo no que fazem de melhor e se destacando, a empresa toma o rumo do objetivo que vocês querem alcançar.</p>
          <div className="trio a" style={{ "--d": "3" } as CSSProperties}><span className="chip">Pessoas</span><span className="chip">Processos</span><span className="chip">Produtividade</span></div>
         </div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Delegar não é luxo. Na escala, é necessidade.</span></div>
       </div></div>
      </section>
    </>
  );
});
