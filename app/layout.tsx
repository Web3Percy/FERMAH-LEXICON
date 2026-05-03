import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fermah Lexicon',
  description: 'The complete terminology for the Fermah ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
