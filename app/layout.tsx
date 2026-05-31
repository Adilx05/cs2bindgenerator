import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CS2 Arsenal - CS2 Utility Toolkit',
  description:
    'Create buy binds, browse weapon commands, generate crosshairs, and explore smoke lineups for Counter-Strike 2.',
  icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
