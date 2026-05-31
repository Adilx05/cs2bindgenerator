'use client';

import { motion } from 'framer-motion';
import {
  Info,
  Gamepad2,
  Shield,
  Zap,
  ExternalLink,
  Github
} from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Buy Bind Generator',
    desc: 'Create custom buy binds with weapon selection and keybinding.'
  },
  {
    icon: Zap,
    title: 'Instant Commands',
    desc: 'Generate ready-to-use CS2 bind commands with one click.'
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-[rgba(245,158,11,0.2)] px-4 py-1.5 text-xs font-medium text-amber-400">
          <Info className="h-3 w-3" />
          About This Project
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-gradient">About</span>{' '}
          <span className="text-[#e2e8f0]">CS2 Arsenal</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 space-y-4"
      >
        <p className="text-[#94a3b8] leading-relaxed">
CS2 Bind Generator is a static-first toolkit designed for Counter-Strike 2 players.
Built by <span className="text-amber-400 font-semibold">QWRpbA==</span>, it provides
a clean and fast way to generate custom buy binds — all in one place.
</p>
<p className="text-[#94a3b8] leading-relaxed">
Built with Next.js 15, React 19, and Tailwind CSS. Fully client-side, no backend required.
</p>
<div className="flex items-center gap-2 pt-2">
<Shield className="h-4 w-4 text-amber-400" />
<span className="text-sm text-[#94a3b8]">
Static export &bull; Fully client-side &bull; Open source
</span>
</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass-card p-6 space-y-5"
      >
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-amber-400" />
          <h2 className="text-xl font-bold text-[#e2e8f0]">Features</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className="flex items-start gap-3 rounded-xl bg-[#1a1a28]/50 border border-[rgba(245,158,11,0.08)] p-4 hover:border-[rgba(245,158,11,0.2)] transition-all duration-300"
              >
                <div className="rounded-lg bg-amber-500/10 p-2 shrink-0">
                  <Icon className="h-4 w-4 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#e2e8f0] text-sm">{feature.title}</h3>
                  <p className="text-xs text-[#94a3b8] mt-0.5">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
<a
  href="https://github.com/Adilx05/cs2bindgenerator"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-amber-400 transition-colors"
>
  <Github className="h-4 w-4" />
  github.com/Adilx05/cs2bindgenerator
</a>
      </motion.div>
    </div>
  );
}
