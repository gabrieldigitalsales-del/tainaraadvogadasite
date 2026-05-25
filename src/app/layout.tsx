import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dra. Tainara Araújo | Advocacia Imobiliária',
  description: 'Advocacia imobiliária para compra e venda, regularização, contratos e soluções extrajudiciais e judiciais.',
  openGraph: {
    title: 'Dra. Tainara Araújo | Advocacia Imobiliária',
    description: 'Segurança jurídica para negócios imobiliários.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
