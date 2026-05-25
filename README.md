# Biosite Tainara Araújo Advocacia

Projeto Next.js + React + TypeScript preparado para Vercel.

## Estrutura

- Visual cinza/grafite premium com detalhes dourados.
- Logo e foto integradas.
- Topo com carrossel institucional.
- Áreas de atuação.
- Atendimento inicial por tipo de demanda.
- Documentos recomendados por cenário.
- Envio para WhatsApp com contexto do caso.
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

A mensagem de atendimento é configurada no componente:

```bash
src/components/ClientDiagnostic.tsx
```


## Resumo no atendimento

A seção de atendimento monta automaticamente um resumo com tipo de demanda, momento do caso e urgência. O visitante pode copiar o resumo ou enviar diretamente para o WhatsApp já com a mensagem preenchida.

## Responsividade

O layout foi estruturado com CSS responsivo para desktop, tablet e celular. Em telas menores, grids, cards, carrossel e área de atendimento passam para uma coluna, mantendo botões e textos legíveis no mobile.


## Ajustes desta versão

- Botão flutuante de atendimento agora pode ser arrastado pela tela, evitando que cubra o rodapé em telas menores.
- Footer com Instagram oficial da Dra. Tainara Araújo Advocacia.
- Créditos mantidos com link para a Nexor Digital.
