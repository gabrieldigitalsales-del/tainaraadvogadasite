'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, FileSearch, Scale } from 'lucide-react';
import { heroSlides } from '@/data/site';

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const slide = useMemo(() => heroSlides[active], [active]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  const go = (direction: number) => {
    setActive((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="heroShell" id="inicio">
      <div className="navBar">
        <a className="brand" href="#inicio" aria-label="Voltar ao topo">
          <span className="brandMark logoMark">
            <img src="/logo-tainara.png" alt="Logo Tainara Araújo Advocacia" />
          </span>
          <span>
            <strong>Dra. Tainara Araújo</strong>
            <small>Advocacia Imobiliária</small>
          </span>
        </a>
        <nav className="desktopLinks" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Atuação</a>
          <a href="#diagnostico">Diagnóstico</a>
          <a href="#checklist">Checklist</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <div className="heroGrid">
        <div className="heroCopy">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <p className="eyebrow">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="lead">{slide.text}</p>
            </motion.div>
          </AnimatePresence>

          <div className="heroActions">
            <a className="primaryButton" href="#diagnostico">
              Fazer pré-diagnóstico <ArrowRight size={18} />
            </a>
            <a className="secondaryButton" href="#servicos">Ver áreas de atuação</a>
          </div>

          <div className="carouselControls" aria-label="Controle do carrossel">
            <button onClick={() => go(-1)} aria-label="Slide anterior"><ChevronLeft size={18} /></button>
            <div className="bullets">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={index === active ? 'active' : ''}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Próximo slide"><ChevronRight size={18} /></button>
          </div>
        </div>

        <aside className="heroPanel" aria-label="Resumo de atuação">
          <div className="panelTop">DIREITO IMOBILIÁRIO</div>
          <div className="panelLogoFrame">
            <img src="/logo-tainara.png" alt="Logo Tainara Araújo Advocacia" />
          </div>
          <div className="panelFeature">
            <FileSearch size={22} />
            <span>Diagnóstico documental e análise de risco antes da decisão.</span>
          </div>
          <div className="goldLine" />
          <p>Contratos • Regularização • Due Diligence • Negociação • Contencioso</p>
          <div className="panelFooter"><Scale size={16} /> OAB/MG 201.625</div>
        </aside>
      </div>
    </section>
  );
}
