'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Keyboard,
  Crosshair,
  Code2,
  Check,
  Package,
  ShoppingCart
} from 'lucide-react';
import { CopyButton } from '@/components/copy-button';
import { asset } from '@/lib/paths';

type BuyItem = { id: string; name: string; cmd: string; image: string };

const rifles: BuyItem[] = [
  { id: 'ak47', name: 'AK-47', cmd: 'buy ak47', image: '/weapon-icons/ak47.svg' },
  { id: 'm4a4', name: 'M4A4', cmd: 'buy m4a1', image: '/weapon-icons/m4a4.svg' },
  { id: 'm4a1s', name: 'M4A1-S', cmd: 'buy m4a1_silencer', image: '/weapon-icons/m4a1s.svg' },
  { id: 'aug', name: 'AUG', cmd: 'buy aug', image: '/weapon-icons/aug.svg' },
  { id: 'famas', name: 'FAMAS', cmd: 'buy famas', image: '/weapon-icons/famas.svg' },
  { id: 'galil', name: 'Galil AR', cmd: 'buy galilar', image: '/weapon-icons/galil.svg' },
  { id: 'sg553', name: 'SG 553', cmd: 'buy sg556', image: '/weapon-icons/sg553.svg' }
];

const snipers: BuyItem[] = [
  { id: 'awp', name: 'AWP', cmd: 'buy awp', image: '/weapon-icons/awp.svg' },
  { id: 'ssg08', name: 'SSG 08', cmd: 'buy ssg08', image: '/weapon-icons/ssg08.svg' },
  { id: 'scar20', name: 'SCAR-20', cmd: 'buy scar20', image: '/weapon-icons/scar20.svg' },
  { id: 'g3sg1', name: 'G3SG1', cmd: 'buy g3sg1', image: '/weapon-icons/g3sg1.svg' }
];

const smgs: BuyItem[] = [
  { id: 'mp9', name: 'MP9', cmd: 'buy mp9', image: '/weapon-icons/mp9.svg' },
  { id: 'mac10', name: 'MAC-10', cmd: 'buy mac10', image: '/weapon-icons/mac10.svg' },
  { id: 'mp7', name: 'MP7', cmd: 'buy mp7', image: '/weapon-icons/mp7.svg' },
  { id: 'mp5sd', name: 'MP5-SD', cmd: 'buy mp5sd', image: '/weapon-icons/mp5sd.svg' },
  { id: 'ump45', name: 'UMP-45', cmd: 'buy ump45', image: '/weapon-icons/ump45.svg' },
  { id: 'p90', name: 'P90', cmd: 'buy p90', image: '/weapon-icons/p90.svg' },
  { id: 'bizon', name: 'PP-Bizon', cmd: 'buy bizon', image: '/weapon-icons/bizon.svg' }
];

const heavy: BuyItem[] = [
  { id: 'nova', name: 'Nova', cmd: 'buy nova', image: '/weapon-icons/nova.svg' },
  { id: 'xm1014', name: 'XM1014', cmd: 'buy xm1014', image: '/weapon-icons/xm1014.svg' },
  { id: 'mag7', name: 'MAG-7', cmd: 'buy mag7', image: '/weapon-icons/mag7.svg' },
  { id: 'sawedoff', name: 'Sawed-Off', cmd: 'buy sawedoff', image: '/weapon-icons/sawedoff.svg' },
  { id: 'm249', name: 'M249', cmd: 'buy m249', image: '/weapon-icons/m249.svg' },
  { id: 'negev', name: 'Negev', cmd: 'buy negev', image: '/weapon-icons/negev.svg' }
];

const pistols: BuyItem[] = [
  { id: 'glock', name: 'Glock-18', cmd: 'buy glock', image: '/weapon-icons/glock.svg' },
  { id: 'usp', name: 'USP-S', cmd: 'buy usp_silencer', image: '/weapon-icons/usp.svg' },
  { id: 'p2000', name: 'P2000', cmd: 'buy hkp2000', image: '/weapon-icons/p2000.svg' },
  { id: 'p250', name: 'P250', cmd: 'buy p250', image: '/weapon-icons/p250.svg' },
  { id: 'deagle', name: 'Desert Eagle', cmd: 'buy deagle', image: '/weapon-icons/deagle.svg' },
  { id: 'revolver', name: 'R8 Revolver', cmd: 'buy revolver', image: '/weapon-icons/revolver.svg' },
  { id: 'fiveseven', name: 'Five-SeveN', cmd: 'buy fiveseven', image: '/weapon-icons/fiveseven.svg' },
  { id: 'tec9', name: 'Tec-9', cmd: 'buy tec9', image: '/weapon-icons/tec9.svg' },
  { id: 'cz75', name: 'CZ75-Auto', cmd: 'buy cz75a', image: '/weapon-icons/cz75.svg' },
  { id: 'dualberettas', name: 'Dual Berettas', cmd: 'buy elite', image: '/weapon-icons/dualberettas.svg' }
];

const utility: BuyItem[] = [
  { id: 'flashbang', name: 'Flashbang', cmd: 'buy flashbang', image: '/weapon-icons/flashbang.svg' },
  { id: 'smoke', name: 'Smoke Grenade', cmd: 'buy smokegrenade', image: '/weapon-icons/smoke.svg' },
  { id: 'hegrenade', name: 'HE Grenade', cmd: 'buy hegrenade', image: '/weapon-icons/hegrenade.svg' },
  { id: 'molotov', name: 'Molotov', cmd: 'buy molotov', image: '/weapon-icons/molotov.svg' },
  { id: 'incendiary', name: 'Incendiary Grenade', cmd: 'buy incgrenade', image: '/weapon-icons/incendiary.svg' },
  { id: 'decoy', name: 'Decoy Grenade', cmd: 'buy decoy', image: '/weapon-icons/decoy.svg' },
  { id: 'zeus', name: 'Zeus x27', cmd: 'buy taser', image: '/weapon-icons/zeus.svg' },
  { id: 'defuse', name: 'Defuse Kit', cmd: 'buy defuser', image: '/weapon-icons/defuse.svg' },
  { id: 'kevlar', name: 'Kevlar Vest', cmd: 'buy vest', image: '/weapon-icons/kevlar.svg' },
  { id: 'helmet', name: 'Kevlar + Helmet', cmd: 'buy vesthelm', image: '/weapon-icons/helmet.svg' }
];

const keyboardRows = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['KP_1', 'KP_2', 'KP_3', 'KP_4', 'KP_5', 'KP_6', 'KP_7', 'KP_8', 'KP_9', 'KP_0']
];

const allWeapons = [...rifles, ...snipers, ...smgs, ...heavy, ...pistols, ...utility];

const sections = [
  { title: 'Rifles', items: rifles, icon: Crosshair },
  { title: 'Sniper Rifles', items: snipers, icon: Crosshair },
  { title: 'SMGs', items: smgs, icon: Crosshair },
  { title: 'Heavy', items: heavy, icon: Crosshair },
  { title: 'Pistols', items: pistols, icon: Crosshair },
  { title: 'Utility & Gear', items: utility, icon: Package }
] as const;

const sectionColors: Record<string, string> = {
  Rifles: 'from-blue-500/10 to-blue-500/5 border-blue-500/20',
  'Sniper Rifles': 'from-purple-500/10 to-purple-500/5 border-purple-500/20',
  SMGs: 'from-green-500/10 to-green-500/5 border-green-500/20',
  Heavy: 'from-red-500/10 to-red-500/5 border-red-500/20',
  Pistols: 'from-orange-500/10 to-orange-500/5 border-orange-500/20',
  'Utility & Gear': 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20'
};

export default function BindsPage() {
  const [selectedKey, setSelectedKey] = useState('KP_1');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const commands = useMemo(
    () => allWeapons.filter((w) => selectedItems.includes(w.id)).map((w) => w.cmd),
    [selectedItems]
  );
  const bindCommand = useMemo(
    () => `bind "${selectedKey}" "${commands.join('; ')}"`,
    [selectedKey, commands]
  );

  const toggle = (id: string) =>
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleSection = (title: string) =>
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-[rgba(245,158,11,0.2)] px-4 py-1.5 text-xs font-medium text-amber-400">
          <ShoppingCart className="h-3 w-3" />
          Interactive Bind Generator
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-gradient">Buy Bind</span>{' '}
          <span className="text-[#e2e8f0]">Generator</span>
        </h1>
        <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
          Select weapons and utilities, choose a keybind, and generate a ready-to-use
          CS2 bind command.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-3 justify-center">
        <div className="glass-card px-4 py-2 text-sm text-[#94a3b8] flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-amber-400" />
          <span>
            <span className="text-amber-400 font-semibold">{selectedItems.length}</span> weapons
            selected
          </span>
        </div>
        <div className="glass-card px-4 py-2 text-sm text-[#94a3b8] flex items-center gap-2">
          <Keyboard className="h-4 w-4 text-amber-400" />
          <span>
            Key: <span className="text-amber-400 font-semibold">{selectedKey}</span>
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map(({ title, items, icon: Icon }) => {
          const isCollapsed = collapsedSections.has(title);
          const selectedCount = items.filter((w) => selectedItems.includes(w.id)).length;
          return (
            <motion.div
              key={title}
              layout
              className={`glass-card overflow-hidden border ${sectionColors[title] || 'border-amber-500/10'}`}
            >
              <button
                onClick={() => toggleSection(title)}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-amber-400" />
                  <span className="font-semibold text-[#e2e8f0]">{title}</span>
                  {selectedCount > 0 && (
                    <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
                      {selectedCount}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <span className="text-xs">{items.length} items</span>
                  {isCollapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-5 pb-5">
                      {items.map((w, idx) => {
                        const isSelected = selectedItems.includes(w.id);
                        return (
                          <motion.button
                            key={w.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            onClick={() => toggle(w.id)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative overflow-hidden rounded-xl border transition-all duration-200 ${
                              isSelected
                                ? 'border-amber-500/60 bg-amber-500/10 amber-glow-sm'
                                : 'border-[rgba(245,158,11,0.08)] bg-[#1a1a28]/50 hover:border-[rgba(245,158,11,0.2)] hover:bg-[#1a1a28]'
                            }`}
                          >
                            <div className="h-24 sm:h-28 flex items-center justify-center p-3 bg-[#0a0a0f]/50">
                              <img
                                src={asset(w.image)}
                                alt={w.name}
                                className="h-full w-full object-contain drop-shadow-lg"
                              />
                            </div>
                            <div className="flex items-center justify-between px-3 py-2">
                              <span className="text-sm font-medium text-[#e2e8f0]">
                                {w.name}
                              </span>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="rounded-full bg-amber-500 p-0.5"
                                >
                                  <Check className="h-3 w-3 text-[#0a0a0f]" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        layout
        className="glass-card p-6 space-y-5"
      >
        <div className="flex items-center gap-3">
          <Keyboard className="h-5 w-5 text-amber-400" />
          <h2 className="text-xl font-bold text-[#e2e8f0]">Bind Configuration</h2>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-[#94a3b8] flex items-center gap-2">
            <Keyboard className="h-3.5 w-3.5" />
            Select Bind Key
          </label>
          <div className="flex flex-wrap gap-2">
            {keyboardRows.map((row, i) => (
              <div key={i} className="flex flex-wrap gap-1.5">
                {row.map((k) => {
                  const isNumpad = k.startsWith('KP_');
                  const displayKey = isNumpad ? k.replace('KP_', 'N') : k;
                  const isSelected = selectedKey === k;
                  return (
                    <motion.button
                      key={k}
                      onClick={() => setSelectedKey(k)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                        isNumpad
                          ? 'text-[#94a3b8] border-[rgba(245,158,11,0.1)] bg-[#1a1a28]/50'
                          : 'text-[#e2e8f0] border-[rgba(245,158,11,0.1)] bg-[#1a1a28]/50'
                      } ${
                        isSelected
                          ? 'border-amber-500/60 bg-amber-500/15 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                          : 'hover:border-[rgba(245,158,11,0.3)] hover:bg-[#1a1a28]'
                      }`}
                    >
                      {displayKey}
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-[#94a3b8] flex items-center gap-2">
            <Code2 className="h-3.5 w-3.5" />
            Generated Command
          </label>
          <div className="terminal p-4 relative group">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="text-[#4a5568] text-xs ml-1">terminal</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0 select-none">$</span>
              <code className="text-[#e2e8f0] break-all leading-relaxed">
                {commands.length === 0 ? (
                  <span className="text-[#4a5568] italic">
                    Select weapons above to generate a bind command...
                  </span>
                ) : (
                  <span>
                    <span className="text-cyan-400">bind</span>{' '}
                    <span className="text-amber-400">&quot;{selectedKey}&quot;</span>{' '}
                    <span className="text-green-400">&quot;</span>
                    {commands.map((cmd, i) => (
                      <span key={cmd}>
                        {i > 0 && <span className="text-[#4a5568]">; </span>}
                        <span className="text-[#e2e8f0]">{cmd}</span>
                      </span>
                    ))}
                    <span className="text-green-400">&quot;</span>
                  </span>
                )}
              </code>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CopyButton text={bindCommand} />
          {commands.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedItems([])}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#94a3b8] hover:text-red-400 hover:bg-red-500/10 border border-[rgba(245,158,11,0.08)] hover:border-red-500/20 transition-all duration-200"
            >
              Clear All
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
