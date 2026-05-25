# Biosite Inteligente - Tainara Araújo Advocacia

Projeto Next.js + React + TypeScript preparado para Vercel.

## O que mudou nesta versão

- Visual cinza/grafite premium com detalhes dourados.
- Logo e foto integradas.
- Topo com carrossel institucional.
- Seção de áreas de atuação.
- Pré-diagnóstico inteligente antes do WhatsApp.
- Cálculo visual de atenção jurídica do caso.
- Checklist dinâmico de documentos por tipo de demanda.
- Mensagem de WhatsApp gerada automaticamente com resumo do caso.
- Botão para copiar o resumo.
- Projeto pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```bash
http://localhost:3000
```

## Publicar na Vercel

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. Na Vercel, clique em **Add New Project**.
4. Selecione o repositório.
5. A Vercel detectará Next.js automaticamente.
6. Clique em **Deploy**.

## WhatsApp

O número está em:

```bash
src/data/site.ts
```

Número configurado:

```bash
5531972147510
```

As mensagens inteligentes são geradas no componente:

```bash
src/components/ClientDiagnostic.tsx
```
