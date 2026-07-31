import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type ArchFrameProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const ArchFrame = ({ children, className = "", style }: ArchFrameProps) => (
  <div
    className={`relative border-2 border-white/70 ${className}`}
    style={{ borderRadius: "999px 999px 12px 12px", ...style }}
  >
    {children}
  </div>
);

const Diamond = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" className="fill-[#F5EFC7]">
    <path d="M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z" />
  </svg>
);

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

const differentialCards = [
  {
    title: "Acolhimento clínico",
    text: "Ambiente ético, respeitoso e estruturado para que o processo terapêutico aconteça com segurança emocional.",
  },
  {
    title: "Orientação objetiva",
    text: "Trabalho com foco em compreensão, metas terapêuticas e estratégias aplicáveis no cotidiano.",
  },
  {
    title: "Atendimento online",
    text: "Flexibilidade, praticidade e continuidade do cuidado com sigilo e conforto no seu ritmo.",
  },
];

const approachCards = [
  {
    title: "TCC",
    text: "Abordagem baseada em evidências para identificar padrões de pensamento, ampliar a compreensão dos sintomas e fortalecer estratégias de resposta mais eficazes.",
  },
  {
    title: "Online",
    text: "Atendimento por videochamada com estrutura, sigilo e praticidade, mantendo continuidade do cuidado no seu ritmo e rotina.",
  },
  {
    title: "Individual",
    text: "Acompanhamento personalizado para adolescentes e adultos, com foco em objetivos clínicos, autonomia e melhora da qualidade de vida.",
  },
];

const whyStartCards = [
  {
    title: "Reduzir sobrecarga emocional",
    text: "Quando os sintomas passam a ocupar mais espaço, iniciar o cuidado pode trazer mais estabilidade e clareza.",
  },
  {
    title: "Aumentar autoconsciência",
    text: "Compreender gatilhos, pensamentos e padrões ajuda a agir com mais consciência e autonomia.",
  },
  {
    title: "Fortalecer respostas práticas",
    text: "A terapia oferece ferramentas para lidar com desafios do cotidiano com mais segurança e equilíbrio.",
  },
];

const howItWorksCards = [
  {
    title: "1. Contato inicial",
    text: "Você me envia uma mensagem e reúne as informações iniciais para a primeira conversa.",
  },
  {
    title: "2. Avaliação inicial",
    text: "A sessão inicial permite entender suas demandas, objetivos e forma de cuidado mais adequada.",
  },
  {
    title: "3. Acompanhamento",
    text: "A partir daí, o processo segue com estrutura, acolhimento e orientação terapêutica contínua.",
  },
];

const heroImage = "/images/fotodeperfil.jpeg";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealItems.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#EAF4FB] text-[#1F3A56] font-[Jost] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        body { background: #F3F6FA; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Jost', sans-serif; }
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px) scale(0.985);
          transition: opacity 700ms ease, transform 700ms ease;
          transition-delay: var(--delay, 0ms);
          will-change: transform, opacity;
        }
        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .soft-hover {
          transition: transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease;
        }
        .soft-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(31, 58, 86, 0.12);
        }
        .soft-cta {
          transition: transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease;
        }
        .soft-cta:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 12px 28px rgba(31, 58, 86, 0.16);
        }
        .professional-card {
          border: 1px solid rgba(31, 58, 86, 0.08);
          background: rgba(255, 255, 255, 0.92);
        }
      `}</style>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#496B85]/95 backdrop-blur shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-body">
          <a href="#hero" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#F5EFC7] text-[#1F3A56] font-display text-sm font-semibold grid place-items-center">
              GR
            </span>
            <span className="text-[#FDFEFF] font-display text-lg tracking-wide">Giovanna Rimkus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#F5EFC7] transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="font-display text-[#1F3A56] bg-[#F5EFC7] px-5 py-2 rounded-full text-sm hover:bg-white soft-cta"
            >
              Agende sua consulta
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#5B93BD] px-6 pb-6 flex flex-col gap-4 text-white font-body">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="font-display text-[#1F3A56] bg-[#F5EFC7] px-5 py-2 rounded-full text-sm text-center"
            >
              Agende sua consulta
            </a>
          </div>
        )}
      </header>

      <section
        id="hero"
        data-reveal
        className="relative overflow-hidden bg-[linear-gradient(135deg,#8FAFCE_0%,#E4EDF5_100%)] pt-32 pb-24 px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.25),transparent_35%)]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center order-1 md:order-2">
            <ArchFrame className="w-64 sm:w-72 h-80 sm:h-96 bg-white/40 overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Giovanna Rimkus, psicóloga"
                className="w-full h-full object-cover scale-[1.18]"
                style={{ objectPosition: "center 18%" }}
              />
            </ArchFrame>
          </div>

          <div className="order-2 md:order-1 text-center md:text-left hero-text" data-reveal style={{ transitionDelay: "120ms" }}>
            <p className="font-body text-xs tracking-[0.25em] text-[#12314B]/80 uppercase mb-3">
              Psicologia Clínica · CRP 06/221270
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-[#FFFFFF] leading-[1.05] drop-shadow-sm">
              Giovanna
              <br />
              Rimkus
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-3 my-5">
              <Diamond />
              <p className="font-display text-xl text-[#F6EEC0]">Psicoterapia Individual</p>
            </div>
            <p className="font-body font-light text-[#11314A] max-w-lg mx-auto md:mx-0 text-base leading-relaxed">
              Atendimento psicológico online para adolescentes e adultos, com foco em diagnóstico clínico, acolhimento e desenvolvimento de estratégias práticas para o manejo de sintomas, emoções e padrões de funcionamento.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="rounded-full bg-white/75 px-4 py-2 text-[11px] font-body tracking-[0.18em] uppercase text-[#1B3550]">Online</span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-[11px] font-body tracking-[0.18em] uppercase text-[#1B3550]">Adolescente e Adultos</span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-[11px] font-body tracking-[0.18em] uppercase text-[#1B3550]">TCC</span>
            </div>
            <a
              href="#contato"
              className="inline-block mt-8 font-display text-[#1D3550] bg-[#F6EEC0] px-10 py-3.5 rounded-full hover:bg-[#FFF9DE] shadow-md soft-cta border border-[#1F3A56]/10"
            >
              Agende sua consulta!
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" data-reveal className="bg-[#F4F7FB] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.25em] text-[#547B9B] uppercase mb-3">Sobre</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6 text-[#17314E]">
            Psicoterapia com base clínica e acolhimento
          </h2>
          <p className="font-body font-light text-[#17314E] leading-relaxed max-w-3xl mx-auto">
            Sou Giovanna Rimkus, psicóloga clínica (CRP 06/221270), com formação na abordagem Cognitivo-Comportamental. Meu trabalho é oferecer um processo terapêutico estruturado, com escuta qualificada, clareza de objetivos e orientações práticas para o fortalecimento do bem-estar emocional e da autonomia.
          </p>
        </div>
      </section>

      <section id="diferenciais" data-reveal className="bg-[#C7D9E9] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] text-[#425F7A] uppercase mb-3">Diferenciais</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#17314E]">
              O que torna o cuidado mais seguro e eficaz
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {differentialCards.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
                className="professional-card rounded-2xl p-8 text-center soft-hover"
              >
                <h3 className="font-display text-xl text-[#17314E] mb-3">{item.title}</h3>
                <p className="font-body text-sm text-[#19324A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="abordagem" data-reveal className="bg-[#E7EEF5] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.25em] text-[#547B9B] uppercase mb-3">Abordagem</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#17314E]">Como trabalho</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {approachCards.map((card, index) => (
              <div
                key={card.title}
                data-reveal
                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                className="professional-card rounded-2xl p-8 text-center shadow-sm soft-hover"
              >
                <h3 className="font-display text-xl mb-3 text-[#17314E]">{card.title}</h3>
                <p className="font-body font-normal text-sm text-[#19324A] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atendimento" data-reveal className="bg-[#F4F7FB] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.25em] text-[#547B9B] uppercase mb-3">Atendimento</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-10 text-[#17314E]">Para quem é a terapia</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="professional-card rounded-2xl p-6 shadow-sm soft-hover">
              <h3 className="font-display text-lg mb-2 text-[#17314E]">Adolescentes</h3>
              <p className="font-body font-normal text-sm text-[#19324A]">
                Apoio clínico para ansiedade, autoestima, relações e desafios emocionais típicos dessa fase, com atenção à singularidade de cada processo.
              </p>
            </div>
            <div data-reveal style={{ transitionDelay: "120ms" }} className="professional-card rounded-2xl p-6 shadow-sm soft-hover">
              <h3 className="font-display text-lg mb-2 text-[#17314E]">Adultos</h3>
              <p className="font-body font-normal text-sm text-[#19324A]">
                Espaço para lidar com ansiedade, sobrecarga, relações, autoconhecimento e objetivos pessoais com estrutura, acolhimento e orientação clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="por-que-comecar" data-reveal className="bg-[#E7EEF5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] text-[#547B9B] uppercase mb-3">Por que começar agora</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#17314E]">
              O cuidado psicológico começa quando a necessidade é reconhecida
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyStartCards.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
                className="professional-card rounded-2xl p-7 shadow-sm soft-hover"
              >
                <h3 className="font-display text-lg text-[#1F3A56] mb-3">{item.title}</h3>
                <p className="font-body text-sm text-[#1F3A56]/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" data-reveal className="bg-[#D8E8F6] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] text-[#5B93BD] uppercase mb-3">Como funciona</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1F3A56]">
              Processo simples, seguro e orientado ao cuidado
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorksCards.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
                className="professional-card rounded-2xl p-7 shadow-sm soft-hover"
              >
                <h3 className="font-display text-lg text-[#1F3A56] mb-3">{item.title}</h3>
                <p className="font-body text-sm text-[#1F3A56]/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        data-reveal
        className="relative overflow-hidden bg-[linear-gradient(135deg,#A8C1DA_0%,#E5EDF6_100%)] py-24 px-6 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.25),transparent_30%)]" />

        <div className="relative max-w-xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-[#17314E] mb-4">Vamos conversar?</h2>
          <p className="font-body font-light text-[#17314E] mb-8">
            Envie um e-mail e combinamos o melhor horário para sua primeira sessão.
          </p>

          <div className="flex items-center justify-center gap-3 bg-white/30 rounded-full px-4 py-3 shadow-md backdrop-blur-sm border border-white/60 soft-hover">
            <span className="w-10 h-10 rounded-full bg-[#F5EFC7] grid place-items-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F3A56" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <a
              href="mailto:grm.psicologa@gmail.com"
              className="font-display text-lg text-[#17314E] hover:text-[#F5EFC7] font-semibold"
            >
              grm.psicologa@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#476D8B] py-8 px-6 text-center border-t border-white/10">
        <p className="font-body text-xs text-white/80 tracking-[0.16em] uppercase">
          Giovanna Rimkus · Psicologia Clínica · CRP 06/221270
        </p>
        <p className="font-body text-[11px] text-white/60 mt-2">Feito por Jamille Teixeira</p>
      </footer>
    </div>
  );
}
