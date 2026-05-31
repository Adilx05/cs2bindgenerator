import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CS2 Bind Generator is a free, open-source tool created by QWRpbA== for Counter-Strike 2 players. Build custom buy binds with weapons, utility, and armor.',
  openGraph: {
    title: 'About CS2 Bind Generator',
    description:
      'Free open-source CS2 buy bind generator by QWRpbA==. Create custom binds with weapons, utility, and armor.'
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
