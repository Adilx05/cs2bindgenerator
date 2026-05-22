import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CS2 Buy Binds',
  description: 'Create Counter-Strike 2 buy binds for every weapon.',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className='mx-auto max-w-7xl p-4'>{children}</main>
      </body>
    </html>
  );
}
