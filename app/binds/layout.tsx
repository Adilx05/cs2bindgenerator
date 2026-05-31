import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Bind Generator',
  description:
    'Create custom CS2 buy binds. Select from 44 weapons, utility items, and armor. Pick a keybind and generate ready-to-use Counter-Strike 2 bind commands.',
  openGraph: {
    title: 'CS2 Buy Bind Generator — Create Custom Buy Binds',
    description:
      'Select weapons, utility, and armor. Pick a key. Generate ready-to-use CS2 bind commands instantly.'
  }
};

export default function BindsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
