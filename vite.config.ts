import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
const heroBg = "https://i.postimg.cc/WzcCgpLF/Gemini-Generated-Image-31slzu31slzu31sl.png";

const WA_LINK = "https://wa.me/5587999342460?text=Olá%20Malu%20Quero%20estratégia%20para%20minhas%20redes%20sociais";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    title: "Escalar Vendas",
    desc: '"Quero atrair mais clientes qualificados"',
    link: "https://wa.me/5587999342460?text=Olá%20Malu%20Quero%20escalar%20vendas",
  },
  {
    title: "Autoridade",
    desc: '"Quero melhorar o meu conteúdo e estética"',
    link: "https://wa.me/5587999342460?text=Olá%20Malu%20Quero%20autoridade",
  },
  {
    title: "Posicionamento",
    desc: '"Quero profissionalizar o meu perfil de negócio"',
    link: "https://wa.me/5587999342460?text=Olá%20Malu%20Quero%20posicionamento",
  },
];

const STATS = [
  { value: "806K+", label: "Visualizações (Dr. César)", sub: "Cirurgião Plástico | 30 dias" },
  { value: "451K+", label: "Visualizações (Dra. PriScYlla)", sub: "Dermatologista | 30 dias" },
  { value: "20+", label: "EMPRESAS GERENCIADAS", sub: "" },
];

const SOCIALS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "LINKEDIN", href: "#" },
  { name: "TIKTOK", href: "#" },
  { name: "YOUTUBE", href: "#" },
  { name: "THREADS", href: "#" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      {/* NAV - Glassmorphism */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4"
        style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)" }}>
        <span className="font-label text-[10px] font-medium tracking-[0.3em] uppercase text-white">
          MALU | SOCIAL MEDIA ESTRATEGISTA
        </span>
        <button
          className="text-white hover:opacity-70 transition-opacity"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile/Desktop menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-16"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)" }}>
          <nav className="flex flex-col items-center justify-center h-full gap-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-headline italic text-3xl text-white/90 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative h-screen w-full flex items-center px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Profissional sofisticada em ambiente editorial"
            className="w-full h-full object-cover"
            width={1280}
            height={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg mt-12">
          <h1 className="font-headline italic text-[36px] md:text-[42px] leading-tight text-white mb-6 tracking-[-0.02em]">
            Transforme suas redes sociais em canal de vendas.
          </h1>
          <p className="font-body font-light text-[16px] text-white/90 leading-relaxed mb-10 max-w-xs">
            Estratégias e criação de conteúdo para negócios que procuram se posicionar.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-on-surface font-label font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-5 hover:bg-surface-container-highest transition-all active:scale-95 duration-200"
          >
            Quero atrair mais clientes
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
          <span className="font-label text-[9px] uppercase tracking-widest">DESLIZE</span>
          <ChevronDown size={32} className="animate-bounce-subtle" />
        </div>
      </section>

      {/* SERVICES - surface-container-low background */}
      <section id="servicos" className="bg-surface-container-low py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h2 className="font-label text-[9px] uppercase tracking-[0.4em] text-on-surface-variant/60 font-medium">
              Selecione o seu momento atual
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-container-lowest flex flex-col justify-between hover:bg-primary transition-colors duration-500 p-5 min-h-[160px]"
              >
                <div className="space-y-3">
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-primary-fixed transition-colors">
                    {s.title}
                  </span>
                  <h3 className="font-headline italic text-xl md:text-2xl text-on-surface group-hover:text-white transition-colors leading-snug">
                    {s.desc}
                  </h3>
                </div>
                <div className="flex justify-end">
                  <ArrowRight
                    size={20}
                    className="text-primary group-hover:text-white transform group-hover:translate-x-1 transition-all"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="resultados" className="bg-surface-container-lowest py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STATS.map((s) => (
              <div key={s.value} className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                <span className="font-headline italic font-bold text-4xl md:text-5xl text-primary tracking-tighter">
                  {s.value}
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60">
                  {s.label}
                </span>
                {s.sub && (
                  <span className="text-[9px] text-on-surface-variant/50 normal-case tracking-normal">
                    {s.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-primary-container py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <h2 className="font-headline italic text-3xl text-primary-fixed leading-tight">
            Pronto(a) para elevar o nível estratégico do seu negócio?
          </h2>
          <div className="flex justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-fixed text-primary font-label font-bold text-[10px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-white transition-all transform hover:-translate-y-1"
            >
              MARCAR REUNIÃO DE PLANEJAMENTO
            </a>
          </div>
        </div>
        {/* Decorative accent */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
          <span className="font-headline italic text-[15vw] leading-none text-white">Malu</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full pt-12 pb-6 flex flex-col items-center gap-6 px-6 text-center"
        style={{ backgroundColor: "#0c0a09" }}>
        <div className="text-base font-headline italic text-white/90">
          Elevando o padrão do seu negócio digital.
        </div>
        <nav className="flex flex-wrap justify-center gap-5 md:gap-10">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="font-label font-medium text-[10px] tracking-widest text-white/30 hover:text-white transition-colors"
            >
              {s.name}
            </a>
          ))}
        </nav>
        <div className="mt-8 font-label text-[8px] tracking-[0.2em] text-white/20">
          © 2026 MALU SOCIAL MEDIA ESTRATEGISTA.
        </div>
      </footer>
    </div>
  );
};

export default Index;
