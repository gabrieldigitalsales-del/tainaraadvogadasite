import { ArrowUpRight, Check, ClipboardCheck, FileSearch, Gavel, Landmark, Quote, ShieldCheck } from 'lucide-react';
import { HeroCarousel } from '@/components/HeroCarousel';
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
            <h2>Serviços jurídicos com posicionamento premium e foco preventivo.</h2>
          </div>
          <p>
            Uma estrutura inteligente: o visitante entende o risco, prepara documentos e chega ao atendimento com um pré-diagnóstico organizado.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span className="cardNumber">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#diagnostico">
                Fazer pré-diagnóstico <ArrowUpRight size={16} />
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
            Uma seção educativa aumenta autoridade e ajuda o cliente a perceber o valor da contratação antes do contato.
          </p>
          <a className="textLink" href="#diagnostico">Fazer análise inteligente <ArrowUpRight size={16} /></a>
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
          <h2>Método de atendimento</h2>
          <p>Um processo objetivo para entender o caso, reduzir riscos e conduzir a solução com elegância institucional.</p>
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
          Uma presença digital com jornada inteligente: o cliente entende o próprio caso, percebe urgência e inicia o contato com informações úteis.
        </p>
      </section>

      <section className="section contact" id="contato">
        <div>
          <p className="eyebrow">ATENDIMENTO</p>
          <h2>Precisa de orientação jurídica imobiliária?</h2>
          <p>Use o pré-diagnóstico para organizar seu caso e iniciar o atendimento com mais clareza.</p>
        </div>
        <a className="primaryButton light" href="#diagnostico">
          Fazer pré-diagnóstico <Gavel size={18} />
        </a>
      </section>

      <a className="floatingWhatsapp" href="#diagnostico" aria-label="Fazer pré-diagnóstico">
        Pré-diagnóstico
      </a>
    </main>
  );
}
