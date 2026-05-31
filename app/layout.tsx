import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://adilx05.github.io/cs2bindgenerator';
const siteName = 'CS2 Bind Generator';
const description =
  'Create Counter-Strike 2 buy binds instantly. Select weapons, utility & armor, pick a key, and generate ready-to-use bind commands. Free CS2 tool.';
const basePath = process.env.NODE_ENV === 'production' ? '/cs2bindgenerator' : '';
const faviconUrl = `${siteUrl}/favicon.svg`;

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — CS2 Buy Bind Generator`,
    template: `%s — ${siteName}`
  },
  description,
  keywords: [
    'CS2',
    'Counter-Strike 2',
    'buy bind generator',
    'CS2 bind',
    'CS2 buy bind',
    'CS2 weapon commands',
    'CS2 kevlar bind',
    'Counter-Strike 2 tools',
    'CS2 utility',
    'CS2 arsenal'
  ],
  authors: [{ name: 'QWRpbA==' }],
  creator: 'QWRpbA==',
  publisher: 'QWRpbA==',
  robots: { index: true, follow: true },
  icons: [{ rel: 'icon', url: `${basePath}/favicon.svg`, type: 'image/svg+xml' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} — CS2 Buy Bind Generator`,
    description,
    images: [{ url: faviconUrl, width: 64, height: 64, alt: siteName }]
  },
  twitter: {
    card: 'summary',
    title: `${siteName} — CS2 Buy Bind Generator`,
    description,
    images: [faviconUrl],
    creator: '@qwrpba'
  },
  alternates: { canonical: siteUrl },
  appleWebApp: { capable: true, title: siteName, statusBarStyle: 'black-translucent' },
  formatDetection: { telephone: false },
  category: 'gaming'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: siteName,
              url: siteUrl,
              description,
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              browserRequirements: 'Requires JavaScript',
              author: { '@type': 'Person', name: 'QWRpbA==' },
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3LYDSF8RT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G3LYDSF8RT');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
