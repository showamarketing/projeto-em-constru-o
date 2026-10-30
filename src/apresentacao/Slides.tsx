// Slides da apresentação "Agentes de IA na prática".
// Gerado a partir do artefato aprovado: mantenha as classes e a estrutura,
// porque o CSS (apresentacao.css) e o modo TV (Apresentacao.tsx) dependem delas.
import { memo, type CSSProperties } from "react";
import logo from "@/assets/showa-logo.png";
import icone from "@/assets/showa-icone.png";

export const TOTAL_SLIDES = 23;

export const Slides = memo(function Slides() {
  return (
    <>
      {/* 01 capa */}
      <section className="slide" id="inicio">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Showa Marketing</span><span className="count">01 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Aula interna · Showa × Impacto</p>
          <h1 className="a" style={{ "--d": "1" } as CSSProperties}>Agentes de IA<br /><span className="hl">na prática.</span></h1>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>O que muda quando a IA deixa de só responder e passa a executar. E um protótipo montado aqui na Showa.</p>
          <p className="cover-meta a" style={{ "--d": "3" } as CSSProperties}>Protótipo real no OpenBot · vídeo entregue de Novembro Azul</p>
         </div>
         <div className="viz f" style={{ "--d": "2" } as CSSProperties}><div className="mock">
          <div className="orb">
           <div className="orb-ring"></div>
           <div className="orb-ring r2"></div>
           <div className="orb-ring" style={{ width: "30em", height: "30em", border: "0" }}>
            <div className="orb-node" style={{ transform: "rotate(0deg) translateY(-15em)" }}><span className="chip"><span className="av"></span>Copywriter</span></div>
            <div className="orb-node" style={{ transform: "rotate(72deg) translateY(-15em) rotate(-72deg)" }}><span className="chip"><span className="av sq"></span>Motion</span></div>
            <div className="orb-node" style={{ transform: "rotate(144deg) translateY(-15em) rotate(-144deg)" }}><span className="chip"><span className="av amb"></span>Agendamento</span></div>
            <div className="orb-node" style={{ transform: "rotate(216deg) translateY(-15em) rotate(-216deg)" }}><span className="chip"><span className="av blu"></span>Design</span></div>
            <div className="orb-node" style={{ transform: "rotate(288deg) translateY(-15em) rotate(-288deg)" }}><span className="chip"><span className="av red"></span>Roteiro</span></div>
           </div>
           <div className="orb-core"><img src={icone} alt="" /></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Um chat responde. Um agente trabalha.</span></div>
       </div></div>
      </section>

      {/* 02 roteiro */}
      <section className="slide" id="roteiro">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">02 / 23</span></div>
        <div className="s-body wide">
         <div className="s-text" style={{ gap: "3cqi" }}>
          <h2 className="a">O que vamos ver hoje</h2>
          <div className="agenda">
           <div className="ag a" style={{ "--d": "1" } as CSSProperties}><span className="n">01</span><h3>Chat × agente</h3><p>Por que um agente é diferente do ChatGPT, do Claude e do Gemini.</p></div>
           <div className="ag a" style={{ "--d": "2" } as CSSProperties}><span className="n">02</span><h3>Os aplicativos</h3><p>GrokBot, e o OpenBot, gratuito, que usa o plano de IA que você já tem.</p></div>
           <div className="ag a" style={{ "--d": "3" } as CSSProperties}><span className="n">03</span><h3>O protótipo</h3><p>Dois agentes conversando num grupo para produzir um vídeo.</p></div>
           <div className="ag a" style={{ "--d": "4" } as CSSProperties}><span className="n">04</span><h3>Narração</h3><p>Voz gerada pelo ElevenLabs, conectado ao agente pela API.</p></div>
           <div className="ag a" style={{ "--d": "5" } as CSSProperties}><span className="n">05</span><h3>Rotina</h3><p>Como transformar isso em produção contínua.</p></div>
           <div className="ag a" style={{ "--d": "6" } as CSSProperties}><span className="n">06</span><h3>Oportunidade</h3><p>Um produto que dá para vender com volume fixo.</p></div>
          </div>
         </div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Primeiro a diferença, depois o caso real, por fim onde isso vira serviço.</span></div>
       </div></div>
      </section>

      {/* 03 diferença */}
      <section className="slide" id="diferenca">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">03 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Antes de tudo</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um chat responde.<br /><span className="hl">Um agente trabalha.</span></h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>No chat, você pergunta e recebe uma resposta. Dá para configurar algumas coisas, mas é limitado. O agente funciona como um profissional da equipe: recebe a função e cumpre as etapas.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="vs">
           <div>
            <div className="win">
             <div className="win-bar"><i></i><i></i><i></i><span className="ttl fs11 mut">Chat</span></div>
             <div className="win-b">
              <div className="bub me fs12">Me dá 5 ideias de post sobre Novembro Azul</div>
              <div className="bub ai"><span className="sk" style={{ width: "90%" }}></span><span className="sk" style={{ width: "72%" }}></span><span className="sk" style={{ width: "84%" }}></span><span className="sk" style={{ width: "60%" }}></span></div>
              <div className="ended fs10">Fim da resposta. O próximo passo é seu.</div>
             </div>
            </div>
            <p className="vs-cap mut">Responde e para</p>
           </div>
           <div>
            <div className="win edge">
             <div className="win-bar"><i></i><i></i><i></i><span className="ttl fs11">Agente</span><span className="live fs10"><span className="dot"></span>trabalhando</span></div>
             <ul className="tasks">
              <li className="done" style={{ "--d": "1" } as CSSProperties}>Pesquisar referências</li>
              <li className="done" style={{ "--d": "2" } as CSSProperties}>Escolher o tema do mês</li>
              <li className="done" style={{ "--d": "3" } as CSSProperties}>Escrever o roteiro</li>
              <li className="run" style={{ "--d": "4" } as CSSProperties}>Enviar para o motion</li>
              <li className="todo" style={{ "--d": "5" } as CSSProperties}>Agendar no Instagram</li>
             </ul>
            </div>
            <p className="vs-cap">Executa e segue</p>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>ChatGPT, Claude e Gemini respondem quando você pergunta. Um agente executa tarefas por você.</span></div>
       </div></div>
      </section>

      {/* 17 especialista */}
      <section className="slide" id="especialista">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">04 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Cada um no seu</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Nenhuma IA é especialista em tudo.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>ChatGPT, Claude e Gemini são ótimos em texto e raciocínio. Para animação e voz, eles até fazem, mas existem ferramentas especialistas. O agente junta a IA com a ferramenta certa.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="tools">
           <div className="tool a" style={{ "--d": "1" } as CSSProperties}><div className="col"><span className="fs13 b">Texto e raciocínio</span><span className="fs10 mut">roteiro, pesquisa, revisão</span></div><span className="arr">→</span><span className="fs12">ChatGPT · Claude</span></div>
           <div className="tool a" style={{ "--d": "2" } as CSSProperties}><div className="col"><span className="fs13 b">Animação</span><span className="fs10 mut">cenas, 3D, render</span></div><span className="arr">→</span><span className="fs12">Remotion · Three.js</span></div>
           <div className="tool a" style={{ "--d": "3" } as CSSProperties}><div className="col"><span className="fs13 b">Voz da IA geral</span><span className="fs10 mut">funciona, mas soa plana</span></div><span className="arr">→</span><div className="wave flat"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
           <div className="tool hot a" style={{ "--d": "4" } as CSSProperties}><div className="col"><span className="fs13 b">Voz, música e efeitos</span><span className="fs10 mut">ferramenta especialista</span></div><span className="arr red">→</span><div className="col" style={{ gap: ".4em" }}><span className="fs12 b">ElevenLabs</span><div className="wave"><i style={{ animationDelay: "-.1s" }}></i><i style={{ animationDelay: "-.5s" }}></i><i style={{ animationDelay: "-.3s" }}></i><i style={{ animationDelay: "-.8s" }}></i><i style={{ animationDelay: "-.2s" }}></i><i style={{ animationDelay: "-.6s" }}></i><i style={{ animationDelay: "-.9s" }}></i><i style={{ animationDelay: "-.4s" }}></i><i style={{ animationDelay: "-.7s" }}></i><i style={{ animationDelay: "-.15s" }}></i><i style={{ animationDelay: "-.55s" }}></i><i style={{ animationDelay: "-.35s" }}></i><i style={{ animationDelay: "-.85s" }}></i><i style={{ animationDelay: "-.25s" }}></i><i style={{ animationDelay: "-.65s" }}></i><i style={{ animationDelay: "-.45s" }}></i></div></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Não é porque é inteligência artificial que é especialista em tudo. Cada tarefa tem a sua ferramenta.</span></div>
       </div></div>
      </section>

      {/* 04 especialistas */}
      <section className="slide" id="especialistas">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">05 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">No ambiente da agência</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um especialista para cada função.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A grande diferença é criar agentes específicos: um só para copy, outro só para roteiro, outro para design, outro para animação. Eles assumem tarefas burocráticas e cobrem lacunas da equipe.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="team">
           <div className="agent p" style={{ "--d": "1" } as CSSProperties}><span className="av"></span><div><div className="fs14 b">Copywriter</div><div className="fs10 mut">Textos e legendas</div></div><div className="st"><span className="dot"></span>escrevendo</div></div>
           <div className="agent p" style={{ "--d": "2" } as CSSProperties}><span className="av red"></span><div><div className="fs14 b">Roteirista</div><div className="fs10 mut">Reels e vídeos</div></div><div className="st"><span className="dot"></span>revisando</div></div>
           <div className="agent p" style={{ "--d": "3" } as CSSProperties}><span className="av blu"></span><div><div className="fs14 b">Design gráfico</div><div className="fs10 mut">Peças e carrosséis</div></div><div className="st"><span className="dot"></span>gerando peças</div></div>
           <div className="agent p" style={{ "--d": "4" } as CSSProperties}><span className="av sq"></span><div><div className="fs14 b">Motion</div><div className="fs10 mut">Animação 2D e 3D</div></div><div className="st"><span className="dot"></span>renderizando</div></div>
           <div className="agent p" style={{ "--d": "5" } as CSSProperties}><span className="av amb"></span><div><div className="fs14 b">Agendamento</div><div className="fs10 mut">Instagram e redes</div></div><div className="st"><span className="dot"></span>3 posts na fila</div></div>
           <div className="agent p" style={{ "--d": "6" } as CSSProperties}><span className="av pur"></span><div><div className="fs14 b">Por cliente</div><div className="fs10 mut">Um agente por conta</div></div><div className="st"><span className="dot"></span>acompanhando</div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Cada agente é um especialista com uma função clara, como numa equipe.</span></div>
       </div></div>
      </section>

      {/* 05 conectores */}
      <section className="slide" id="conectores">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">06 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Conectores</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Ele age dentro das plataformas.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Os agentes se conectam às ferramentas. Cada um pode cuidar de um cliente, entrar no Instagram pelo conector e deixar as publicações agendadas.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="win"><div style={{ padding: "1.6em" }}>
           <div className="cal-h">
            <span className="chip fs10"><span className="dot"></span>Instagram</span>
            <span className="chip fs10"><span className="dot"></span>Facebook</span>
            <span className="chip fs10"><span className="dot"></span>Google Drive</span>
            <span className="chip fs10 dim" style={{ marginLeft: "auto" }}>Semana 03–09 nov</span>
           </div>
           <div className="cal">
            <span></span><span className="dh">Seg</span><span className="dh">Ter</span><span className="dh">Qua</span><span className="dh">Qui</span><span className="dh">Sex</span><span className="dh">Sáb</span><span className="dh">Dom</span>
            <span className="tm">09h</span><span className="cell"><i className="thumb"></i></span><span className="cell"></span><span className="cell"><i className="thumb b2"></i></span><span className="cell"></span><span className="cell"><i className="thumb b3"></i></span><span className="cell"></span><span className="cell"></span>
            <span className="tm">12h</span><span className="cell"></span><span className="cell"><i className="thumb b3"></i></span><span className="cell"></span><span className="cell"><i className="thumb"></i></span><span className="cell"></span><span className="cell"><i className="thumb b2"></i></span><span className="cell"></span>
            <span className="tm">18h</span><span className="cell"><i className="thumb b2"></i></span><span className="cell"><i className="thumb new"></i></span><span className="cell"></span><span className="cell"></span><span className="cell"><i className="thumb"></i></span><span className="cell"></span><span className="cell"></span>
           </div>
           <div className="toast"><span className="av amb sm"></span><div className="col"><span className="fs12 b">Reel agendado para terça, 18h</span><span className="fs10 mut">Feito pelo agente de agendamento · @cliente</span></div><span className="dot" style={{ marginLeft: "auto" }}></span></div>
          </div></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Com conectores, o agente não só sugere. Ele entra na plataforma e faz.</span></div>
       </div></div>
      </section>

      {/* 06 GrokBot */}
      <section className="slide" id="grokbot">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">07 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Os aplicativos</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>GrokBot, o mais conhecido hoje.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Vem da empresa do X, o antigo Twitter. O Grok já era o assistente de IA da plataforma. Agora também roda como agente instalado no computador, fazendo tarefas junto com você.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>IA própria integrada</li><li>Fácil de instalar e de usar</li><li>Várias empresas já usam no dia a dia</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="win">
           <div className="win-bar"><i></i><i></i><i></i><span className="ttl fs11">GrokBot</span><span className="live fs10"><span className="dot"></span>em execução</span></div>
           <ul className="feed">
            <li style={{ "--d": "1" } as CSSProperties}><span className="tg">09:02</span>Abrindo a planilha de leads da semana</li>
            <li style={{ "--d": "2" } as CSSProperties}><span className="tg">09:03</span>Lendo 42 conversas do atendimento</li>
            <li style={{ "--d": "3" } as CSSProperties}><span className="tg">09:05</span>Agrupando dúvidas mais frequentes</li>
            <li style={{ "--d": "4" } as CSSProperties}><span className="tg">09:07</span>Escrevendo o resumo para a equipe</li>
            <li className="ok" style={{ "--d": "5" } as CSSProperties}><span className="tg">09:08</span>Relatório salvo em /Relatórios</li>
           </ul>
          </div>
          <div className="badges"><span className="chip fs11">Assistente do X</span><span className="chip fs11">Instala no computador</span><span className="chip fs11">Tarefas em conjunto</span></div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O GrokBot mostrou que dá para ter um agente fácil de usar trabalhando no computador.</span></div>
       </div></div>
      </section>

      {/* 07 OpenBot */}
      <section className="slide" id="openbot">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">08 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Código aberto</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Depois veio o <span className="hl">OpenBot</span>, gratuito.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Desenvolvedores estudaram como o GrokBot funciona e lançaram uma versão de código aberto. Para dar inteligência aos agentes, você conecta o plano que já tem do ChatGPT ou do Claude.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw" viewBox="0 0 520 400" role="img" aria-label="GrokBot gera o OpenBot por engenharia reversa; o OpenBot recebe os planos do ChatGPT e do Claude">
           <rect x="10" y="40" width="190" height="110" rx="18" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} />
           <text x="105" y="88" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "20px", fontWeight: "600" }}>GrokBot</text>
           <text x="105" y="114" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "12px" }}>código fechado</text>
           <path d="M205 95 H315" className="flow-dash" style={{ stroke: "var(--mut)", strokeWidth: "2", fill: "none" }} />
           <path d="M308 88 L318 95 L308 102" style={{ fill: "none", stroke: "var(--mut)", strokeWidth: "2" }} />
           <text x="260" y="80" textAnchor="middle" style={{ fill: "var(--dim)", fontSize: "11px" }}>engenharia reversa</text>
           <rect x="320" y="30" width="190" height="130" rx="18" style={{ fill: "rgba(167,46,33,.16)", stroke: "var(--red-hi)", strokeWidth: "1.5" }} />
           <text x="415" y="82" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "20px", fontWeight: "700" }}>OpenBot</text>
           <text x="415" y="106" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "12px" }}>código aberto</text>
           <rect x="370" y="118" width="90" height="24" rx="12" style={{ fill: "var(--green-soft)", stroke: "var(--green)" }} />
           <text x="415" y="134" textAnchor="middle" style={{ fill: "var(--green)", fontSize: "11px", fontWeight: "600" }}>GRATUITO</text>
           <path d="M190 330 C 260 330, 330 260, 380 162" className="flow-dash" style={{ stroke: "var(--red-hi)", strokeWidth: "2", fill: "none" }} />
           <path d="M450 300 C 450 240, 440 210, 440 162" className="flow-dash" style={{ stroke: "var(--red-hi)", strokeWidth: "2", fill: "none" }} />
           <rect x="20" y="290" width="170" height="80" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} />
           <text x="105" y="325" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "15px", fontWeight: "600" }}>Seu plano</text>
           <text x="105" y="347" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "13px" }}>ChatGPT</text>
           <rect x="365" y="300" width="150" height="80" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} />
           <text x="440" y="335" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "15px", fontWeight: "600" }}>Seu plano</text>
           <text x="440" y="357" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "13px" }}>Claude</text>
           <text x="250" y="236" textAnchor="middle" style={{ fill: "var(--dim)", fontSize: "11px" }}>conecta a inteligência</text>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O sistema é gratuito. A inteligência vem do plano de IA que você já paga.</span></div>
       </div></div>
      </section>

      {/* 08 segundo plano */}
      <section className="slide" id="segundo-plano">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">09 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Segundo plano</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Ele trabalha enquanto você faz outra coisa.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Dá para programar rotinas e ensinar o agente a pesquisar e trabalhar sozinho. Você segue no computador e, quando olha, o relatório já está pronto.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="desk">
           <div className="win fg">
            <div className="win-bar"><i></i><i></i><i></i><span className="ttl fs10 mut">Planilha de campanhas · você trabalhando</span></div>
            <div className="sheet"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
           </div>
           <div className="note"><span className="ic fs12">✓</span><div className="col"><span className="fs12 bb">Relatório pronto</span><span className="fs10" style={{ color: "#555" }}>Morpheus · 8 temas para o mês</span></div></div>
           <div className="bgw">
            <div className="row"><span className="av sm"></span><span className="fs11 b">Morpheus</span><span className="live fs9"><span className="dot"></span>em segundo plano</span></div>
            <span className="fs10 mut">Pesquisando pautas de andrologia</span>
            <div className="bar"><i></i></div>
            <span className="chip fs9" style={{ alignSelf: "flex-start" }}>Rotina · todo dia às 8h</span>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Você programa a rotina uma vez. O agente pesquisa e trabalha sozinho em segundo plano.</span></div>
       </div></div>
      </section>

      {/* 09 Showa hoje */}
      <section className="slide" id="showa">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">10 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Como usamos aqui</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Na Showa, o foco é o nosso próprio perfil.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Nosso trabalho é mais comercial e enxuto, com pouca demanda de social media. Por isso os estudos começaram pelo perfil empresarial da Showa.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="tiles">
           <div className="tile p" style={{ "--d": "1" } as CSSProperties}><span className="tag">em estudo</span><div className="fs16 b">Referências</div><div className="fs10 mut">Coletar perfis e formatos que funcionam</div>
            <div className="spark"><i style={{ height: "30%", "--d": "1" } as CSSProperties}></i><i style={{ height: "45%", "--d": "2" } as CSSProperties}></i><i style={{ height: "38%", "--d": "3" } as CSSProperties}></i><i style={{ height: "60%", "--d": "4" } as CSSProperties}></i><i style={{ height: "52%", "--d": "5" } as CSSProperties}></i><i className="on" style={{ height: "80%", "--d": "6" } as CSSProperties}></i></div></div>
           <div className="tile p" style={{ "--d": "2" } as CSSProperties}><span className="tag">em estudo</span><div className="fs16 b">Concorrentes</div><div className="fs10 mut">Puxar e comparar o que publicam</div>
            <div className="mini-list"><span>Perfil A<b className="red">+12 posts</b></span><span>Perfil B<b>+7 posts</b></span><span>Perfil C<b>+4 posts</b></span></div></div>
           <div className="tile p" style={{ "--d": "3" } as CSSProperties}><span className="tag">em estudo</span><div className="fs16 b">Análise de dados</div><div className="fs10 mut">Ler números e resumir o que mudou</div>
            <div className="spark"><i style={{ height: "70%", "--d": "1" } as CSSProperties}></i><i style={{ height: "55%", "--d": "2" } as CSSProperties}></i><i style={{ height: "62%", "--d": "3" } as CSSProperties}></i><i style={{ height: "40%", "--d": "4" } as CSSProperties}></i><i style={{ height: "48%", "--d": "5" } as CSSProperties}></i><i className="on" style={{ height: "66%", "--d": "6" } as CSSProperties}></i></div></div>
           <div className="tile p" style={{ "--d": "4" } as CSSProperties}><span className="tag">em estudo</span><div className="fs16 b">Assistente de Google Ads</div><div className="fs10 mut">Acompanhar campanhas e sugerir ajustes</div>
            <div className="mini-list"><span>Termos de pesquisa<b>revisar</b></span><span>Orçamento diário<b className="grn">ok</b></span></div></div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Na Showa, os estudos começaram pelo nosso próprio perfil empresarial.</span></div>
       </div></div>
      </section>

      {/* 10 protótipo */}
      <section className="slide" id="prototipo">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">11 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Protótipo para vocês</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Dois agentes e um grupo onde eles conversam.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Montado no OpenBot, no meu computador, para um cliente de urologia.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li><span><b>Morpheus</b> · copywriter de marketing médico</span></li><li><span><b>Basheus</b> · motion graphics</span></li><li><span><b>Grupo</b> · onde um passa o trabalho ao outro</span></li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob">
           <div className="ob-top"><span className="loc">Local</span><span className="tab"><span className="grp" style={{ width: "2.2em" }}><span className="av"></span><span className="av sq"></span></span>Showa Marketing - Felipe Ramalho</span></div>
           <div className="ob-main">
            <div className="ob-side">
             <div className="ob-search">Buscar</div>
             <div className="ob-item sel p" style={{ "--d": "1" } as CSSProperties}><span className="grp"><span className="av"></span><span className="av sq"></span></span><div className="txt"><div className="nm">Showa Marketing - F… <small>20:41</small></div><div className="pv">Sent a message</div></div></div>
             <div className="ob-item p" style={{ "--d": "2" } as CSSProperties}><span className="av sq"></span><div className="txt"><div className="nm">Basheus <small>20:37</small></div><div className="pv">A chave do ElevenLabs foi salva…</div></div></div>
             <div className="ob-item p" style={{ "--d": "3" } as CSSProperties}><span className="av"></span><div className="txt"><div className="nm">Morpheus <small>20:33</small></div><div className="pv">Roteiro v1 do reel "PSA e toq…</div></div></div>
            </div>
            <div className="ob-chat">
             <div className="ob-msg me a" style={{ "--d": "3" } as CSSProperties}><div className="ob-who you">Você</div>Pessoal, vamos estabelecer a conversa em conjunto aqui.<br /><span className="mention">@Morpheus</span>, seu primeiro roteiro, consegue enviar aqui?</div>
             <div className="ob-sys a" style={{ "--d": "5" } as CSSProperties}>Atribuído a <span className="av sm" style={{ width: "1.2em", height: "1.2em" }}></span> Morpheus · 20:35</div>
             <div className="ob-msg a" style={{ "--d": "6" } as CSSProperties}><div className="ob-who">Morpheus</div><span className="typing">Segue meu primeiro roteiro: PSA e toque retal, Novembro Azul</span></div>
             <div className="ob-input"><span>Mensagem para o grupo</span><span>↑</span></div>
            </div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Dois agentes com funções diferentes, trabalhando juntos num grupo.</span></div>
       </div></div>
      </section>

      {/* 11 Morpheus */}
      <section className="slide" id="morpheus">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">12 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Agente 1 · Copywriter</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}><span className="hl">Morpheus</span> pesquisa antes de escrever.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Especialista em copy para marketing médico urológico. Antes de qualquer roteiro, estudou três profissionais que já fazem isso bem e perguntou o que precisava saber.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Entrega: roteiros de reels de até 90 segundos</li><li>Público definido: andrologia</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob" style={{ display: "grid", gridTemplateColumns: "1fr 21em" }}>
           <div className="ob-chat" style={{ gap: "1.1em" }}>
            <div className="ob-card a" style={{ "--d": "1" } as CSSProperties}>
             <span className="ob-ok">Respostas enviadas</span>
             <div><div className="q">Qual formato você quer primeiro?</div><div className="ans">Reels animado de 90 segundos</div></div>
             <div><div className="q">Por onde começo?</div><div className="ans">Buscar temas do zero</div></div>
             <div><div className="q">Quem é o público e o perfil do médico?</div><div className="ans">andrologia</div></div>
            </div>
            <div className="ob-steps a" style={{ "--d": "3" } as CSSProperties}><b>3 subagentes executados</b> · 3 concluídos · 1 min 21 s</div>
            <div className="col" style={{ gap: ".5em" }}>
             <div className="ob-card p" style={{ "--d": "4", flexDirection: "row", alignItems: "center", padding: ".7em .9em" } as CSSProperties}><span className="dot"></span><span className="fs10"><b>Roberto Rossi Neto</b> · urologista, Salvador</span></div>
             <div className="ob-card p" style={{ "--d": "5", flexDirection: "row", alignItems: "center", padding: ".7em .9em" } as CSSProperties}><span className="dot"></span><span className="fs10"><b>Rahul Mehan</b> · urologista, Arizona</span></div>
             <div className="ob-card p" style={{ "--d": "6", flexDirection: "row", alignItems: "center", padding: ".7em .9em" } as CSSProperties}><span className="dot"></span><span className="fs10"><b>Rena Malik</b> · urologista, YouTube</span></div>
            </div>
           </div>
           <div className="cfg">
            <div className="row" style={{ justifyContent: "space-between" }}><span className="fs11 b">Configurações do agente</span></div>
            <span className="av lg" style={{ alignSelf: "center" }}></span>
            <div><div className="lbl">Nome</div><div className="fld">Morpheus</div></div>
            <div><div className="lbl">Instruções</div><div className="ins">Você é um especialista em copywriter na área do marketing médico urológico com foco em retenção de conteúdo. Porém, antes de iniciar, busque 3 profissionais que resolveram esse problema, entenda o que eles fizeram pra chegar no resultado. Se tiver dúvida sobre algo me pergunte.</div></div>
            <div className="sec">Cérebro</div>
            <div className="kv"><span>Modelo</span><span>GPT-6.1-Sol</span></div>
            <div className="kv"><span>Raciocínio</span><span>Alto</span></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>A instrução define o especialista. As perguntas que ele faz evitam retrabalho.</span></div>
       </div></div>
      </section>

      {/* 12 Basheus */}
      <section className="slide" id="basheus">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">13 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Agente 2 · Motion graphics</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}><span className="hl">Basheus</span> transforma roteiro em animação.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Especialista em motion graphics para vídeos de saúde. Estudou a referência visual que enviei e listou o que precisava para animar no próprio computador.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Entrega em 9:16, já narrado</li><li>Ferramentas: Remotion, Three.js e ElevenLabs</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob" style={{ display: "grid", gridTemplateColumns: "21em 1fr" }}>
           <div className="cfg" style={{ borderLeft: "0", borderRight: "1px solid var(--ob-line)" }}>
            <span className="fs11 b">Configurações do agente</span>
            <span className="av sq lg" style={{ alignSelf: "center" }}></span>
            <div><div className="lbl">Nome</div><div className="fld">Basheus</div></div>
            <div><div className="lbl">Instruções</div><div className="ins">Você é um especialista em motion graphics para vídeos de saúde. Antes disso, você deve buscar os melhores modelos ou exemplos de vídeos feitos com o Remotion. Você fica responsável por entregar os arquivos em 9:16, narrado, com API ElevenLabs.</div></div>
            <div className="sec">Cérebro</div>
            <div className="kv"><span>Modelo</span><span>GPT-6-Astra</span></div>
           </div>
           <div className="ob-chat" style={{ alignItems: "center", justifyContent: "center", gap: "1.2em" }}>
            <div className="row" style={{ gap: ".5em", flexWrap: "wrap", justifyContent: "center" }}>
             <span className="chip fs10 p" style={{ "--d": "2", borderColor: "#3a3a3a" } as CSSProperties}>Remotion</span>
             <span className="chip fs10 p" style={{ "--d": "3", borderColor: "#3a3a3a" } as CSSProperties}>Three.js</span>
             <span className="chip fs10 p" style={{ "--d": "4", borderColor: "var(--red-hi)" } as CSSProperties}>ElevenLabs</span>
            </div>
            <div style={{ width: "12em", aspectRatio: "9/16", borderRadius: "1.4em", border: ".35em solid #2c2c2c", background: "radial-gradient(circle at 50% 40%,#13283f,#07090d 70%)", position: "relative", overflow: "hidden" }}>
             <div style={{ position: "absolute", left: "50%", top: "30%", width: "4.4em", height: "4.4em", marginLeft: "-2.2em", borderRadius: "1em", background: "linear-gradient(135deg,#6aa9ff,#1d4c8f)", transform: "rotate(45deg)", animation: "floaty 3s ease-in-out infinite" }}></div>
             <div style={{ position: "absolute", left: "18%", top: "58%", width: "2.2em", height: "2.2em", borderRadius: "50%", background: "linear-gradient(135deg,#9fd0ff,#2b6fc0)", animation: "floaty 2.4s ease-in-out infinite reverse" }}></div>
             <div style={{ position: "absolute", right: "16%", top: "54%", width: "2.6em", height: "1.4em", borderRadius: ".4em", background: "linear-gradient(135deg,#3ED598,#167a55)", animation: "floaty 2.8s ease-in-out infinite" }}></div>
             <div style={{ position: "absolute", left: "10%", right: "10%", bottom: "12%", textAlign: "center", fontFamily: "var(--f-display)", fontWeight: "700", fontSize: "1.05em", lineHeight: "1.2" }}>PSA NORMAL ≠<br />TUDO CERTO</div>
            </div>
            <span className="fs9" style={{ color: "var(--ob-mut)" }}>1080 × 1920 · 9:16 · narrado</span>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Cada agente sabe quais ferramentas precisa para fazer o seu trabalho.</span></div>
       </div></div>
      </section>

      {/* 18 ElevenLabs */}
      <section className="slide" id="elevenlabs">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">14 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">ElevenLabs + API</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Com a chave da API, ele gera a voz sozinho.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A API é um código de acesso. Colada no OpenBot ou no Claude, dá ao agente acesso ao ElevenLabs. Ele perguntou qual voz usar, sugeriu as que combinavam com o vídeo e produziu em cima disso.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Assinatura de R$ 30 a 40 por mês</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="el">
           <div className="el-top">
            <div className="el-box a" style={{ "--d": "1" } as CSSProperties}><span className="fs14 bb">ElevenLabs</span><span className="fs10 mut">Geração de áudio por IA</span><div className="chips"><span className="chip">Narração</span><span className="chip">Audiolivro</span><span className="chip">Música</span><span className="chip">Efeitos sonoros</span></div></div>
            <div className="col p" style={{ "--d": "3", alignItems: "center", gap: ".5em" } as CSSProperties}><span className="fs9 dim">chave da API</span><span className="key">sk_••••••3f2a</span><span className="red fs16">→</span></div>
            <div className="el-box a" style={{ "--d": "2" } as CSSProperties}><span className="row"><span className="av sq sm"></span><span className="fs14 bb">Basheus</span></span><span className="fs10 mut">no OpenBot</span><span className="fs10" style={{ color: "var(--green)", marginTop: "auto" }}>A chave do ElevenLabs foi salva com segurança e está disponível para gerar as narrações.</span></div>
           </div>
           <div className="win a" style={{ "--d": "4", padding: "1.2em", display: "flex", flexDirection: "column", gap: ".6em" } as CSSProperties}>
            <span className="fs11 b">Vozes sugeridas pelo agente</span>
            <div className="voice sel"><span className="play">▶</span><div className="col"><span className="fs12 b">Voz 1</span><span className="fs9 mut">grave, calma, didática</span></div><div className="wave"><i style={{ animationDelay: "-.1s" }}></i><i style={{ animationDelay: "-.5s" }}></i><i style={{ animationDelay: "-.3s" }}></i><i style={{ animationDelay: "-.8s" }}></i><i style={{ animationDelay: "-.2s" }}></i><i style={{ animationDelay: "-.6s" }}></i><i style={{ animationDelay: "-.9s" }}></i><i style={{ animationDelay: "-.4s" }}></i><i style={{ animationDelay: "-.7s" }}></i><i style={{ animationDelay: "-.15s" }}></i><i style={{ animationDelay: "-.55s" }}></i><i style={{ animationDelay: "-.35s" }}></i></div><span className="chip fs9" style={{ borderColor: "var(--red-hi)" }}>combina com o vídeo</span></div>
            <div className="voice"><span className="play">▶</span><div className="col"><span className="fs12 b">Voz 2</span><span className="fs9 mut">média, conversada</span></div><div className="wave"><i style={{ height: "40%" }}></i><i style={{ height: "70%" }}></i><i style={{ height: "50%" }}></i><i style={{ height: "90%" }}></i><i style={{ height: "30%" }}></i><i style={{ height: "60%" }}></i><i style={{ height: "80%" }}></i><i style={{ height: "45%" }}></i><i style={{ height: "65%" }}></i><i style={{ height: "35%" }}></i><i style={{ height: "75%" }}></i><i style={{ height: "50%" }}></i></div><span></span></div>
            <div className="voice"><span className="play">▶</span><div className="col"><span className="fs12 b">Voz 3</span><span className="fs9 mut">jovem, enérgica</span></div><div className="wave"><i style={{ height: "60%" }}></i><i style={{ height: "85%" }}></i><i style={{ height: "40%" }}></i><i style={{ height: "70%" }}></i><i style={{ height: "95%" }}></i><i style={{ height: "50%" }}></i><i style={{ height: "65%" }}></i><i style={{ height: "80%" }}></i><i style={{ height: "35%" }}></i><i style={{ height: "90%" }}></i><i style={{ height: "55%" }}></i><i style={{ height: "70%" }}></i></div><span></span></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Com a chave da API, o agente usa o ElevenLabs sozinho, sem ninguém abrir o site.</span></div>
       </div></div>
      </section>

      {/* 13 temas */}
      <section className="slide" id="temas">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">15 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Pesquisa de temas</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Trouxe os temas e puxou o do momento.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Ele entendeu a data: Novembro Azul começa no mês que vem. O primeiro roteiro foi sobre PSA e toque retal, pensado para quem precisa fazer o exame de próstata.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob" style={{ padding: "1.4em" }}>
           <div className="row" style={{ justifyContent: "space-between", marginBottom: "1em" }}><span className="row"><span className="av sm"></span><span className="fs12 b">Morpheus</span></span><span className="chip fs9" style={{ borderColor: "rgba(106,169,255,.5)", color: "#9cc1ff" }}>Novembro Azul começa em 3 dias</span></div>
           <div className="fs14 b" style={{ marginBottom: ".6em" }}>8 temas de andrologia</div>
           <div className="themes">
            <div className="th" style={{ "--d": "1" } as CSSProperties}><span className="n">1</span><span>Disfunção erétil antes dos 40</span><span></span></div>
            <div className="th pick" style={{ "--d": "2" } as CSSProperties}><span className="n">2</span><span><b>PSA e toque retal</b>: o que cada exame mede</span><span className="stamp">escolhido</span></div>
            <div className="th" style={{ "--d": "3" } as CSSProperties}><span className="n">3</span><span>Testosterona baixa</span><span></span></div>
            <div className="th" style={{ "--d": "4" } as CSSProperties}><span className="n">4</span><span>Anabolizantes e fertilidade</span><span></span></div>
            <div className="th" style={{ "--d": "5" } as CSSProperties}><span className="n">5</span><span>Vasectomia: 5 mitos</span><span></span></div>
            <div className="th" style={{ "--d": "6" } as CSSProperties}><span className="n">6</span><span>Calor e fertilidade</span><span></span></div>
            <div className="th" style={{ "--d": "7" } as CSSProperties}><span className="n">7</span><span>Dor testicular: quando é urgência</span><span></span></div>
            <div className="th" style={{ "--d": "8" } as CSSProperties}><span className="n">8</span><span>Fratura peniana</span><span></span></div>
           </div>
           <div className="fs9" style={{ color: "var(--ob-mut)", marginTop: ".9em" }}>Todos educativos, dentro da Resolução CFM 2.336/2023.</div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O agente olha o calendário e prioriza o tema que faz sentido agora.</span></div>
       </div></div>
      </section>

      {/* 14 roteiro 90s */}
      <section className="slide" id="roteiro-90s">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">16 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O roteiro</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>90 segundos, já com direção visual.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Cada trecho traz o que a narração diz e o que a animação mostra. O Morpheus passou o roteiro no grupo para o Basheus produzir.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob" style={{ padding: "1.3em 1.4em 2em" }}>
           <div className="row" style={{ marginBottom: ".8em" }}><span className="av sm"></span><span className="fs11 b">Morpheus</span><span className="ob-file" style={{ margin: "0 0 0 auto" }}>roteiro-psa-toque-novembro-azul-v1.md</span></div>
           <table className="scr">
            <thead><tr><th>Tempo</th><th>Narração</th><th>Direção visual</th></tr></thead>
            <tbody>
             <tr style={{ "--d": "1" } as CSSProperties}><td>0–3s</td><td>“PSA normal não quer dizer que está tudo certo.”</td><td>Lupa sobre uma próstata do tamanho de uma noz. <b>PSA NORMAL ≠ TUDO CERTO</b></td></tr>
             <tr style={{ "--d": "2" } as CSSProperties}><td>3–14s</td><td>“Muito homem faz um exame e dispensa o outro.”</td><td>A noz abre. Surgem duas placas: <b>PSA</b> e <b>TOQUE</b></td></tr>
             <tr style={{ "--d": "3" } as CSSProperties}><td>14–32s</td><td>“O PSA é uma proteína que a próstata produz.”</td><td>Partículas azuis seguem para uma gota de sangue</td></tr>
             <tr style={{ "--d": "4" } as CSSProperties}><td>50–65s</td><td>“Juntos, eles se completam.”</td><td>Os blocos se encaixam: <b>Um complementa o outro</b></td></tr>
             <tr style={{ "--d": "5" } as CSSProperties}><td>80–90s</td><td>“Comenta ‘EXAME’ que eu te explico.”</td><td>Novembro em azul. <b>Comenta · Envia · Salva</b></td></tr>
            </tbody>
           </table>
           <div className="tl">
            <div className="track"><i style={{ width: "3.3%", background: "#6aa9ff" }}></i><i style={{ width: "12.2%", background: "#4a7fcc" }}></i><i style={{ width: "20%", background: "#3a6aa8" }}></i><i style={{ width: "20%", background: "#2f5a8e" }}></i><i style={{ width: "16.7%", background: "#3a6aa8" }}></i><i style={{ width: "16.7%", background: "#4a7fcc" }}></i><i style={{ width: "11.1%", background: "#6aa9ff" }}></i></div>
            <div className="head"></div>
            <span className="lab" style={{ left: "0" }}>0s</span><span className="lab" style={{ left: "48%" }}>45s</span><span className="lab" style={{ right: "0" }}>90s</span>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O roteiro já sai com a direção visual. É isso que o motion recebe para produzir.</span></div>
       </div></div>
      </section>

      {/* 15 revisão */}
      <section className="slide" id="revisao">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">17 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">No grupo</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um agente <span className="hl">revisou</span> o outro.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Ao ler o roteiro, o Basheus encontrou trechos que pediam cuidado, mesmo sem essa ser a função dele. Propôs a correção e pediu aprovação antes de produzir.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>Idade de início dos exames</li><li>Duração do toque retal</li><li>Para quem compartilhar o vídeo</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="ob">
           <div className="ob-top"><span className="tab" style={{ margin: "0" }}><span className="grp" style={{ width: "2.2em" }}><span className="av"></span><span className="av sq"></span></span>Showa Marketing - Felipe Ramalho</span></div>
           <div className="ob-chat">
            <div className="ob-msg me a" style={{ "--d": "1" } as CSSProperties}><div className="ob-who you">Você</div><span className="mention">@Basheus</span> pode produzir a partir do roteiro, segue o ID da voz do ElevenLabs</div>
            <div className="ob-msg a" style={{ "--d": "3", maxWidth: "100%", width: "100%" } as CSSProperties}><div className="ob-who teal">Basheus</div>
             <div className="qcard">
              <span className="fs10">Na conferência, encontrei um ajuste necessário: o INCA recomenda decisão individual sobre os exames, considerando riscos e benefícios. Posso ajustar o roteiro?</span>
              <div className="diff">
               <span><del>A conversa costuma começar aos 50 anos. Aos 45, se…</del></span>
               <span><ins>Depende dos sintomas, do histórico e do risco de cada pessoa.</ins></span>
               <span><del>Manda pra quem tem mais de 45.</del> <ins>Manda pra quem precisa dessa conversa.</ins></span>
              </div>
              <div className="qopts"><span className="qopt yes">✓ Usar esses ajustes</span><span className="qopt">Aguardar revisão do médico</span></div>
             </div>
            </div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O agente sinaliza o problema e propõe a correção. A aprovação continua sendo sua.</span></div>
       </div></div>
      </section>

      {/* 16 render */}
      <section className="slide" id="render">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">18 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Produção</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Renderizar leva um tempo.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>A animação é gerada no próprio computador, usando os núcleos e as threads do processador. Quanto melhor a máquina, mais rápido o vídeo sai.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="win">
           <div className="win-bar"><i></i><i></i><i></i><span className="ttl fs11">Basheus · renderizando</span><span className="live fs10"><span className="dot"></span>64%</span></div>
           <div style={{ padding: "1.6em", display: "flex", flexDirection: "column", gap: "1.3em" }}>
            <div className="row" style={{ justifyContent: "space-between" }}><span className="fs13 b">novembro-azul.mp4</span><span className="fs10 mut">1080 × 1920 · 30 fps</span></div>
            <div className="rprog"><i></i></div>
            <div className="row fs10 mut" style={{ justifyContent: "space-between" }}><span>Quadro 1.728 de 2.700</span><span>Narração, música e efeitos incluídos</span></div>
            <div>
             <div className="row" style={{ justifyContent: "space-between", marginBottom: ".7em" }}><span className="fs11 b">Processador</span><span className="fs10 mut">12 threads em uso</span></div>
             <div className="cores"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Demora um pouco, e é normal. A velocidade depende da máquina.</span></div>
       </div></div>
      </section>

      {/* 19 entrega */}
      <section className="slide" id="entrega">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">19 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">A entrega</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>O vídeo que os agentes entregaram.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>PSA e toque retal, para o Novembro Azul. Roteiro do Morpheus, animação 3D e narração do Basheus, já com o ajuste aprovado no grupo.</p>
          <ul className="pts a" style={{ "--d": "3" } as CSSProperties}><li>1 min 24 s · 9:16</li><li>Narração, música e efeitos sonoros</li><li>Legenda e textos na tela</li></ul>
         </div>
         <div className="viz"><div className="mock">
          <div className="deliv">
           <div className="phone p" style={{ "--d": "1" } as CSSProperties}>
            <video src="/video-psa.mp4" poster="/video-psa-capa.jpg" controls playsInline preload="metadata" aria-label="Vídeo PSA e toque retal, Novembro Azul"></video>
           </div>
           <div className="deliv-side">
            <div className="deliv-step a" style={{ "--d": "2" } as CSSProperties}><span className="av sm"></span><div className="col"><span className="fs12 b">Roteiro</span><span className="fs10 mut">Morpheus · 90 s com direção visual</span></div></div>
            <div className="deliv-step a" style={{ "--d": "3" } as CSSProperties}><span className="av sq sm"></span><div className="col"><span className="fs12 b">Revisão</span><span className="fs10 mut">Basheus sinalizou e você aprovou</span></div></div>
            <div className="deliv-step a" style={{ "--d": "4" } as CSSProperties}><span className="av sq sm"></span><div className="col"><span className="fs12 b">Animação 3D</span><span className="fs10 mut">Remotion + Three.js</span></div></div>
            <div className="deliv-step a" style={{ "--d": "5" } as CSSProperties}><span className="av sq sm"></span><div className="col"><span className="fs12 b">Narração</span><span className="fs10 mut">ElevenLabs, voz escolhida no grupo</span></div></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Esse vídeo foi roteirizado, animado e narrado pelos agentes. A revisão e a aprovação foram humanas.</span></div>
       </div></div>
      </section>

      {/* 20 tempo */}
      <section className="slide" id="tempo">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">20 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">O resultado</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Cerca de 20 minutos contra uma tarde inteira.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>O vídeo chegou com narração, música e efeitos sonoros. Na mão, só mover os elementos já levaria umas 5 horas. E o 3D nem estaria ao alcance: eu não mexo com Blender.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="cmp">
           <div className="cmp-row">
            <div className="hd"><span className="fs13 mut">Editando na mão</span><span className="big">~5 h</span></div>
            <div className="cmp-bar"><i style={{ width: "100%", background: "rgba(255,255,255,.28)", "--d": "0" } as CSSProperties}></i></div>
            <span className="fs10 dim">Só animação 2D movendo elementos. Sem 3D.</span>
           </div>
           <div className="cmp-row">
            <div className="hd"><span className="fs13">Com os agentes</span><span className="big red">20–30 min</span></div>
            <div className="cmp-bar"><i style={{ width: "10%", background: "var(--red-hi)", "--d": "1" } as CSSProperties}></i></div>
            <span className="fs10 dim">Roteiro, 3D, narração, música e efeitos sonoros.</span>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Um vídeo de uma tarde inteira sai em cerca de 20 minutos, com narração, música e efeitos.</span></div>
       </div></div>
      </section>

      {/* 20 rotina */}
      <section className="slide" id="rotina">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">21 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Rotinas</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Com rotina, vira produção contínua.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Se um contrato prevê animações frequentes, o copywriter pesquisa sozinho todo dia, ou um agente curador de matérias entrega a pauta. O roteiro segue direto para o motion.</p>
         </div>
         <div className="viz"><div className="mock">
          <svg className="svgw" id="pipe" viewBox="0 0 520 380" role="img" aria-label="Fluxo: rotina diária, curador de pautas, Morpheus, Basheus, aprovação">
           <path id="pp" d="M60 70 H460 V190 H60 V310 H460" style={{ fill: "none", stroke: "var(--line2)", strokeWidth: "2" }} />
           <path d="M60 70 H460 V190 H60 V310 H460" className="flow-dash" style={{ fill: "none", stroke: "var(--red-hi)", strokeWidth: "2", opacity: ".5" }} />
           <circle r="7" style={{ fill: "var(--red-hi)" }}><animateMotion dur="7s" repeatCount="indefinite" rotate="auto"><mpath href="#pp" /></animateMotion></circle>
           <g><rect x="10" y="40" width="150" height="60" rx="30" style={{ fill: "#fff" }} /><text x="85" y="66" textAnchor="middle" style={{ fill: "#000", fontSize: "13px", fontWeight: "700" }}>ROTINA</text><text x="85" y="84" textAnchor="middle" style={{ fill: "#333", fontSize: "11px" }}>todo dia · 8h</text></g>
           <g><rect x="345" y="40" width="165" height="60" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="427" y="66" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Curador de pautas</text><text x="427" y="84" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>busca matérias</text></g>
           <g><rect x="345" y="160" width="165" height="60" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><circle cx="370" cy="190" r="11" style={{ fill: "var(--av-green)" }} /><text x="440" y="186" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Morpheus</text><text x="440" y="204" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>escreve o roteiro</text></g>
           <g><rect x="10" y="160" width="165" height="60" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><rect x="24" y="179" width="22" height="22" rx="6" style={{ fill: "var(--av-teal)" }} /><text x="105" y="186" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Basheus</text><text x="105" y="204" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>anima e narra</text></g>
           <g><rect x="10" y="280" width="165" height="60" rx="16" style={{ fill: "var(--panel2)", stroke: "var(--line2)" }} /><text x="92" y="306" textAnchor="middle" style={{ fill: "var(--fg)", fontSize: "14px", fontWeight: "600" }}>Vídeo pronto</text><text x="92" y="324" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>9:16 · narrado</text></g>
           <g><rect x="345" y="280" width="165" height="60" rx="30" style={{ fill: "rgba(16,185,129,.14)", stroke: "var(--green)" }} /><text x="427" y="306" textAnchor="middle" style={{ fill: "var(--green)", fontSize: "14px", fontWeight: "700" }}>Sua aprovação</text><text x="427" y="324" textAnchor="middle" style={{ fill: "var(--mut)", fontSize: "11px" }}>e entrega ao cliente</text></g>
          </svg>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Com rotina programada, o tema, o roteiro e a animação seguem sozinhos até a aprovação.</span></div>
       </div></div>
      </section>

      {/* 21 oportunidade */}
      <section className="slide" id="oportunidade">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">22 / 23</span></div>
        <div className="s-body">
         <div className="s-text">
          <p className="eyebrow a">Oportunidade</p>
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Um serviço para vender com volume.</h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Precisa da assinatura do Claude e, dependendo do fluxo, de um plano maior. Mesmo sendo simples de fazer, o médico não vai parar para produzir. Ele prefere pagar por um pacote fixo.</p>
         </div>
         <div className="viz"><div className="mock">
          <div className="offer">
           <div className="prop p" style={{ "--d": "1" } as CSSProperties}>
            <span className="k">Pacote mensal</span>
            <span className="qty">10</span>
            <span className="fs16 bb">animações por mês</span>
            <ul><li>Roteiro com revisão</li><li>Vídeo 9:16 narrado</li><li>Música e efeitos</li><li>Entrega recorrente</li></ul>
           </div>
           <div className="costs">
            <div className="cost a" style={{ "--d": "2" } as CSSProperties}><span className="fs10 mut">Custo da operação</span><span className="fs13 b">Plano de IA</span><span className="fs10 dim">Claude ou ChatGPT, conforme o fluxo</span></div>
            <div className="cost a" style={{ "--d": "3" } as CSSProperties}><span className="fs10 mut">Custo da operação</span><span className="fs13 b">ElevenLabs</span><span className="fs10 dim">R$ 30 a 40 por mês</span></div>
            <div className="cost a" style={{ "--d": "4", borderColor: "rgba(16,185,129,.45)" } as CSSProperties}><span className="fs10 grn">Para a agência</span><span className="fs13 b">Preço justo e volume fixo</span><span className="fs10 dim">Mais acessível que a animação tradicional</span></div>
           </div>
          </div>
         </div></div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>O cliente não vai parar para fazer isso. Ele prefere pagar, e você entrega com volume fixo.</span></div>
       </div></div>
      </section>

      {/* 22 começo */}
      <section className="slide" id="comeco">
       <div className="frame"><div className="fi">
        <div className="s-top"><span className="s-brand"><img src={icone} alt="" />Agentes de IA na prática</span><span className="count">23 / 23</span></div>
        <div className="s-body wide">
         <div className="closing">
          <img className="p" src={logo} alt="Showa" />
          <h2 className="a" style={{ "--d": "1" } as CSSProperties}>Isso é só o <span className="hl">começo.</span></h2>
          <p className="lede a" style={{ "--d": "2" } as CSSProperties}>Os mesmos agentes servem para muito mais do que vídeo. É um mundo grande para explorar, e quanto mais a gente estudar, melhor fica.</p>
          <div className="uses a" style={{ "--d": "3" } as CSSProperties}><span className="chip">Programação</span><span className="chip">Gestão de pautas</span><span className="chip">Organização</span><span className="chip">Agendamento</span><span className="chip">Relatórios</span></div>
         </div>
        </div>
        <div className="s-foot"><b>Leve esta ideia</b><span>Quem ficar responsável pelo tema estuda e aprimora. Esse mercado está só começando.</span></div>
       </div></div>
      </section>
    </>
  );
});
