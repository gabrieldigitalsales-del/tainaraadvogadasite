# Biosite Premium - Dra. Tainara Araujo

Projeto premium em Next.js + React + TypeScript, com estetica advocaticia de luxo, bordas quadradas e carrossel no topo.

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Como trocar o WhatsApp

Abra `src/data/site.ts` e substitua:

```ts
export const whatsappNumber = '5531972147510';
```

Use o formato com DDI + DDD + numero, somente digitos.
Exemplo: `5531999999999`.

## Onde editar textos

- Textos do carrossel: `src/data/site.ts`
- Servicos: `src/data/site.ts`
- Conteudo da pagina: `src/app/page.tsx`
- Aparencia visual: `src/app/globals.css`

## Publicar na Vercel

Este pacote ja esta preparado para deploy na Vercel.

### Opção 1: Deploy via GitHub

1. Crie um repositorio no GitHub e envie esta pasta.
2. Entre em https://vercel.com/new
3. Importe o repositorio.
4. A Vercel deve detectar automaticamente o framework Next.js.
5. Confirme:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Development Command: `npm run dev`
6. Clique em Deploy.

### Opção 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Para publicar em producao:

```bash
vercel --prod
```

## WhatsApp configurado

O numero atual configurado e `5531972147510`.

A mensagem automatica continua configurada no arquivo `src/data/site.ts` dentro de `contactLink`.
