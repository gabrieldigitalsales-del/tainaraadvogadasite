import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dra. Tainara Araújo | Advocacia Imobiliária',
  description: 'Biosite premium para advocacia imobiliária: assessoria, regularização, atuação extrajudicial e judicial.',
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
