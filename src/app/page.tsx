import { ArrowUpRight, Check, ClipboardCheck, FileSearch, Gavel, Landmark, Quote, ShieldCheck } from 'lucide-react';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FloatingAction } from '@/components/FloatingAction';
import { ClientDiagnostic } from '@/components/ClientDiagnostic';
import { journeySteps, riskItems, services, stats } from '@/data/site';

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <section className="section statsStrip" aria-label="Destaques profissionais">
        {stats.map((item) => (
          <div className="statCard" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section aboutGrid aboutPremium" id="sobre">
        <div className="aboutPortraitBlock">
          <div className="portraitFrame">
            <img src="/foto-tainara.png" alt="Dra. Tainara Araújo Ribeiro" />
          </div>
          <div className="portraitSeal">
            <img src="/logo-tainara.png" alt="Logo Tainara Araújo Advocacia" />
          </div>
        </div>

        <div className="aboutContent">
          <p className="eyebrow dark">SOBRE A ADVOGADA</p>
          <h2>Presença técnica para proteger decisões imobiliárias importantes.</h2>
          <div className="aboutText boxedText">
            <Quote size={26} />
            <p>
              Me chamo Tainara Araújo Ribeiro, sou advogada imobiliária com 4 anos de experiência e inscrita na OAB/MG: 201.625.
            </p>
            <p>
              Atuo em todo o Brasil, oferecendo soluções jurídicas especializadas para transações imobiliárias. Meu compromisso é garantir segurança, clareza e eficiência em cada negociação, proporcionando tranquilidade para alcançar seus objetivos no mercado imobiliário.
            </p>
          </div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="sectionHeader splitHeader">
          <div>
            <p className="eyebrow dark">ÁREAS DE ATUAÇÃO</p>
            <h2>Atuação jurídica imobiliária com precisão técnica e foco preventivo.</h2>
          </div>
          <p>
            Atendimento voltado à proteção de patrimônio, análise documental e condução segura de negociações imobiliárias.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span className="cardNumber">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#diagnostico">
                Iniciar atendimento <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <ClientDiagnostic />

      <section className="section riskGrid" id="checklist">
        <div className="riskCard mainRisk">
          <FileSearch size={30} />
          <p className="eyebrow dark">CHECKLIST DE RISCO</p>
          <h2>O que precisa ser analisado antes de negociar um imóvel?</h2>
          <p>
            Antes de assinar, pagar sinal ou assumir qualquer obrigação, alguns pontos devem ser avaliados com cuidado técnico.
          </p>
          <a className="textLink" href="#diagnostico">Verificar meu caso <ArrowUpRight size={16} /></a>
        </div>
        <div className="riskList">
          {riskItems.map((item) => (
            <div className="riskItem" key={item}>
              <ClipboardCheck size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="methodCard darkCard">
          <Landmark size={28} />
          <h2>Como funciona o atendimento</h2>
          <p>Um processo objetivo para compreender o caso, reduzir riscos e conduzir cada etapa com segurança jurídica.</p>
        </div>
        <div className="timeline">
          {journeySteps.map((step) => (
            <div className="timelineItem" key={step.title}>
              <Check size={18} />
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section signatureBlock">
        <div className="signatureLogo"><img src="/logo-tainara.png" alt="Logo Tainara Araújo Advocacia" /></div>
        <div className="iconSquare"><ShieldCheck size={30} /></div>
        <h2>Transparência, segurança e agilidade em cada negociação.</h2>
        <p>
          Atendimento jurídico voltado a decisões imobiliárias importantes, com clareza, estratégia e cuidado em cada etapa.
        </p>
      </section>

      <section className="section contact" id="contato">
        <div>
          <p className="eyebrow">ATENDIMENTO</p>
          <h2>Precisa de orientação jurídica imobiliária?</h2>
          <p>Informe o contexto inicial do seu caso e receba o direcionamento para iniciar o atendimento.</p>
          <div className="contactSocial">
            <a href="https://www.instagram.com/tainaraaraujoadvocacia/" target="_blank" rel="noreferrer" aria-label="Instagram da Dra. Tainara Araújo Advocacia">
              <span>📸</span> Instagram profissional
            </a>
          </div>
        </div>
        <a className="primaryButton light" href="#diagnostico">
          Iniciar atendimento <Gavel size={18} />
        </a>
      </section>

      <footer className="siteFooter">
        <div className="footerTop">
          <div className="footerBrand">
            <img src="/logo-tainara.png" alt="Logo Tainara Araújo Advocacia" />
            <div>
              <strong>Dra. Tainara Araújo Advocacia</strong>
              <span>Advocacia Imobiliária • OAB/MG 201.625</span>
            </div>
          </div>

          <nav className="footerNav" aria-label="Links do rodapé">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Áreas de atuação</a>
            <a href="#diagnostico">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="footerBottom">
          <span>© 2026 Dra. Tainara Araújo. Todos os direitos reservados.</span>
          <a href="https://www.instagram.com/nexor_digital_" target="_blank" rel="noreferrer" aria-label="Instagram da Nexor Digital">
            Feito pela Nexor Digital
          </a>
        </div>
      </footer>

      <FloatingAction />
    </main>
  );
}
