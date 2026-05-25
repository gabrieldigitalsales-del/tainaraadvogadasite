import { ArrowUpRight, Check, Gavel, Landmark, Quote, ShieldCheck } from 'lucide-react';
import { HeroCarousel } from '@/components/HeroCarousel';
import { contactLink, services, stats } from '@/data/site';

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
          <h2>Presença, técnica e segurança para conduzir decisões imobiliárias importantes.</h2>
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
        <div className="sectionHeader">
          <p className="eyebrow dark">CATÁLOGO</p>
          <h2>Serviços jurídicos com estética premium e foco em resultado.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span className="cardNumber">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={contactLink} target="_blank" rel="noreferrer">
                Entre em contato <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="methodCard darkCard">
          <Landmark size={28} />
          <h2>Método de atendimento</h2>
          <p>Um processo objetivo para entender o caso, reduzir riscos e conduzir a solução com elegância institucional.</p>
        </div>
        <div className="timeline">
          {[
            ['Diagnóstico', 'Levantamento inicial do objetivo, urgência, documentos e riscos envolvidos.'],
            ['Estratégia', 'Definição do caminho jurídico mais seguro: extrajudicial, negocial ou judicial.'],
            ['Execução', 'Acompanhamento técnico, comunicação clara e condução até a resolução.'],
          ].map(([title, text]) => (
            <div className="timelineItem" key={title}>
              <Check size={18} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
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
          Uma presença digital feita para transmitir autoridade, confiança e valor percebido desde o primeiro clique.
        </p>
      </section>

      <section className="section contact" id="contato">
        <div>
          <p className="eyebrow">ATENDIMENTO</p>
          <h2>Precisa de orientação jurídica imobiliária?</h2>
          <p>Solicite uma avaliação e receba direcionamento profissional para seu caso.</p>
        </div>
        <a className="primaryButton light" href={contactLink} target="_blank" rel="noreferrer">
          Falar com a Dra. Tainara <Gavel size={18} />
        </a>
      </section>
    </main>
  );
}
