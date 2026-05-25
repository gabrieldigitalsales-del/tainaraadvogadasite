'use client';

import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Building2,
  ClipboardList,
  Copy,
  FileText,
  Gavel,
  Home,
  MessageCircle,
  Scale,
  ScrollText,
  ShieldAlert,
} from 'lucide-react';
import { whatsappNumber } from '@/data/site';

type NeedId = 'compra' | 'contrato' | 'regularizacao' | 'conflito';
type UrgencyId = 'hoje' | 'semana' | 'planejamento';
type StageId = 'pesquisando' | 'negociando' | 'assinei' | 'problema';

const needs: Array<{
  id: NeedId;
  icon: typeof Home;
  title: string;
  short: string;
  guidance: string;
  docs: string[];
  risks: string[];
}> = [
  {
    id: 'compra',
    icon: Home,
    title: 'Compra ou venda de imóvel',
    short: 'Vou negociar um imóvel e quero segurança antes de pagar ou assinar.',
    guidance: 'O ideal é analisar a matrícula, titularidade, certidões, débitos, forma de pagamento, posse e cláusulas antes de qualquer sinal ou assinatura.',
    docs: ['Matrícula atualizada', 'Contrato ou proposta', 'Documentos das partes', 'Comprovantes de débitos ou certidões'],
    risks: ['ônus oculto', 'cláusula frágil', 'perda de sinal', 'problema de registro'],
  },
  {
    id: 'contrato',
    icon: ScrollText,
    title: 'Revisão de contrato',
    short: 'Tenho contrato, proposta, locação, promessa, permuta ou cessão para revisar.',
    guidance: 'A revisão deve mapear obrigações, multas, prazos, garantias, posse, condições de pagamento e pontos que podem gerar conflito depois.',
    docs: ['Contrato em PDF ou foto', 'Proposta comercial', 'Conversas importantes', 'Dados do imóvel'],
    risks: ['multa desproporcional', 'prazo inseguro', 'garantia insuficiente', 'responsabilidade mal definida'],
  },
  {
    id: 'regularizacao',
    icon: Building2,
    title: 'Regularização de imóvel',
    short: 'Existe pendência em escritura, matrícula, construção, posse, inventário ou registro.',
    guidance: 'A estratégia depende de identificar o gargalo: posse, cadeia de proprietários, prefeitura, cartório, inventário, usucapião ou ajuste documental.',
    docs: ['Matrícula ou escritura', 'IPTU ou cadastro municipal', 'Comprovantes de posse', 'Histórico de compra e venda'],
    risks: ['imóvel sem registro', 'posse sem prova', 'obra irregular', 'inventário pendente'],
  },
  {
    id: 'conflito',
    icon: Scale,
    title: 'Conflito imobiliário',
    short: 'Há problema com locação, distrato, atraso, cobrança, posse ou descumprimento.',
    guidance: 'É importante organizar provas e definir se a solução mais segura será notificação, acordo, medida extrajudicial ou ação judicial.',
    docs: ['Contrato', 'Comprovantes de pagamento', 'Mensagens e notificações', 'Fotos, laudos ou provas'],
    risks: ['perda de prazo', 'prova insuficiente', 'cobrança indevida', 'agravamento do conflito'],
  },
];

const urgencyOptions: Array<{ id: UrgencyId; label: string; score: number }> = [
  { id: 'hoje', label: 'Tenho prazo, sinal, assinatura ou conflito urgente', score: 36 },
  { id: 'semana', label: 'Preciso resolver nos próximos dias', score: 22 },
  { id: 'planejamento', label: 'Estou planejando com calma', score: 10 },
];

const stageOptions: Array<{ id: StageId; label: string; score: number }> = [
  { id: 'pesquisando', label: 'Ainda estou pesquisando', score: 8 },
  { id: 'negociando', label: 'Já estou em negociação', score: 18 },
  { id: 'assinei', label: 'Já assinei ou paguei algum valor', score: 30 },
  { id: 'problema', label: 'Já existe problema ou notificação', score: 38 },
];

export function ClientDiagnostic() {
  const [needId, setNeedId] = useState<NeedId>('compra');
  const [urgencyId, setUrgencyId] = useState<UrgencyId>('semana');
  const [stageId, setStageId] = useState<StageId>('negociando');

  const need = needs.find((item) => item.id === needId) ?? needs[0];
  const urgency = urgencyOptions.find((item) => item.id === urgencyId) ?? urgencyOptions[1];
  const stage = stageOptions.find((item) => item.id === stageId) ?? stageOptions[1];

  const whatsappMessage = useMemo(() => {
    return [
      'Olá, Dra. Tainara. Gostaria de orientação jurídica imobiliária.',
      '',
      `Tipo de caso: ${need.title}`,
      `Momento: ${stage.label}`,
      `Urgência: ${urgency.label}`,
      '',
      'Gostaria de orientação jurídica imobiliária para receber atendimento.',
    ].join('\n');
  }, [need.title, stage.label, urgency.label]);

  const contactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
    } catch {
      // O envio pelo WhatsApp continua funcionando mesmo quando o navegador bloqueia a copia.
    }
  };

  return (
    <section className="section smartHub" id="diagnostico">
      <div className="smartIntro">
        <p className="eyebrow dark">ATENDIMENTO IMOBILIÁRIO</p>
        <h2>Comece pelo tipo de demanda.</h2>
        <p>
          Selecione as opções correspondentes ao seu caso e siga para o atendimento pelo WhatsApp.
        </p>
      </div>

      <div className="smartGrid">
        <div className="smartPanel smartQuestions">
          <div className="questionBlock">
            <span className="questionStep">01</span>
            <h3>Qual é a necessidade principal?</h3>
            <div className="needGrid" role="list" aria-label="Escolha a necessidade jurídica imobiliária">
              {needs.map((item) => {
                const Icon = item.icon;
                const active = item.id === need.id;
                return (
                  <button
                    type="button"
                    className={`needChoice ${active ? 'active' : ''}`}
                    key={item.id}
                    onClick={() => setNeedId(item.id)}
                  >
                    <Icon size={22} />
                    <strong>{item.title}</strong>
                    <small>{item.short}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="questionBlock compactBlock">
            <span className="questionStep">02</span>
            <h3>Em que momento o caso está?</h3>
            <div className="pillGroup">
              {stageOptions.map((option) => (
                <button
                  type="button"
                  className={`smartPill ${option.id === stage.id ? 'active' : ''}`}
                  key={option.id}
                  onClick={() => setStageId(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="questionBlock compactBlock">
            <span className="questionStep">03</span>
            <h3>Qual é a urgência?</h3>
            <div className="pillGroup">
              {urgencyOptions.map((option) => (
                <button
                  type="button"
                  className={`smartPill ${option.id === urgency.id ? 'active' : ''}`}
                  key={option.id}
                  onClick={() => setUrgencyId(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="smartPanel smartResult" aria-live="polite">
          <div className="caseHeader">
            <span>Atendimento imobiliário</span>
            <h3>{need.title}</h3>
            <p>{need.short}</p>
          </div>

          <div className="guidanceBox">
            <div className="guidanceIcon"><ShieldAlert size={24} /></div>
            <div>
              <strong>Direcionamento inicial</strong>
              <p>{need.guidance}</p>
            </div>
          </div>

          <div className="smartColumns">
            <div>
              <h4><ClipboardList size={17} /> Documentos úteis</h4>
              {need.docs.map((doc) => (
                <span className="smartItem" key={doc}><FileText size={15} /> {doc}</span>
              ))}
            </div>
            <div>
              <h4><AlertTriangle size={17} /> Riscos comuns</h4>
              {need.risks.map((risk) => (
                <span className="smartItem" key={risk}><Gavel size={15} /> {risk}</span>
              ))}
            </div>
          </div>

          <div className="messagePreview">
            <strong>Resumo para atendimento</strong>
            <p>{whatsappMessage}</p>
          </div>

          <div className="smartActions">
            <a className="primaryButton" href={contactLink} target="_blank" rel="noreferrer">
              Enviar pelo WhatsApp <MessageCircle size={18} />
            </a>
            <button className="copyButton" type="button" onClick={copySummary}>
              Copiar <Copy size={16} />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
