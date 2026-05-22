'use client';

import { useMemo, useState } from 'react';
import { CopyButton } from '@/components/copy-button';

type BuyItem = { id: string; name: string; cmd: string; image: string };

const primaryWeapons: BuyItem[] = [
  { id: 'ak47', name: 'AK-47', cmd: 'buy ak47', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=700' },
  { id: 'm4a1', name: 'M4A1-S', cmd: 'buy m4a1_silencer', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=700' },
  { id: 'awp', name: 'AWP', cmd: 'buy awp', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=700' },
  { id: 'galil', name: 'Galil AR', cmd: 'buy galilar', image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=700' }
];

const pistols: BuyItem[] = [
  { id: 'deagle', name: 'Desert Eagle', cmd: 'buy deagle', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=700' },
  { id: 'tec9', name: 'Tec-9', cmd: 'buy tec9', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700' },
  { id: 'five7', name: 'Five-SeveN', cmd: 'buy fiveseven', image: 'https://images.unsplash.com/photo-1516727003284-a96541e51e9c?w=700' }
];

const utilities: BuyItem[] = [
  { id: 'flashbang', name: 'Flashbang', cmd: 'buy flashbang', image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=700' },
  { id: 'smoke', name: 'Smoke', cmd: 'buy smokegrenade', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700' },
  { id: 'he', name: 'HE Grenade', cmd: 'buy hegrenade', image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?w=700' },
  { id: 'molotov', name: 'Molotov/Incendiary', cmd: 'buy molotov; buy incgrenade', image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=700' },
  { id: 'kit', name: 'Defuse Kit', cmd: 'buy defuser', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700' }
];

const armorOptions = [
  { id: 'none', name: 'Zırh yok', cmd: '' },
  { id: 'kevlar', name: 'Sadece Kevlar', cmd: 'buy vest' },
  { id: 'vesthelm', name: 'Kevlar + Helm', cmd: 'buy vesthelm' }
];

const keyboardRows = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['KP_1', 'KP_2', 'KP_3', 'KP_4', 'KP_5', 'KP_6', 'KP_7', 'KP_8', 'KP_9', 'KP_0']
];

export default function BindsPage() {
  const [selectedKey, setSelectedKey] = useState('KP_1');
  const [primary, setPrimary] = useState<BuyItem | null>(primaryWeapons[0]);
  const [pistol, setPistol] = useState<BuyItem | null>(null);
  const [armor, setArmor] = useState(armorOptions[2]);
  const [selectedUtils, setSelectedUtils] = useState<string[]>([]);

  const selectedUtilityCommands = useMemo(() => utilities.filter((u) => selectedUtils.includes(u.id)).flatMap((u) => u.cmd.split(';').map((x) => x.trim())), [selectedUtils]);

  const bindCommand = useMemo(() => {
    const parts = [primary?.cmd, pistol?.cmd, armor.cmd, ...selectedUtilityCommands].filter(Boolean);
    return `bind "${selectedKey}" "${parts.join('; ')}"`;
  }, [selectedKey, primary, pistol, armor, selectedUtilityCommands]);

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold text-slate-800'>Buy Bind Builder</h1>
      <p className='text-slate-600'>Silahını görselden seç, ekipmanları ekle ve klavyeden tuşa tıkla. Numpad dahil.</p>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>1) Ana Silah Seç</h2>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {primaryWeapons.map((w) => (
            <button key={w.id} onClick={() => setPrimary(w)} className={`overflow-hidden rounded-xl border text-left ${primary?.id === w.id ? 'border-amber-400 ring-2 ring-amber-300' : 'border-amber-100'}`}>
              <img src={w.image} alt={w.name} className='h-28 w-full object-cover' />
              <div className='p-2 font-medium text-slate-700'>{w.name}</div>
            </button>
          ))}
        </div>
      </section>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>2) Pistol (Opsiyonel)</h2>
        <div className='flex flex-wrap gap-2'>
          <button onClick={() => setPistol(null)} className={`rounded-lg px-3 py-2 ${pistol === null ? 'bg-amber-300' : 'bg-white'}`}>Boş Geç</button>
          {pistols.map((p) => <button key={p.id} onClick={() => setPistol(p)} className={`rounded-lg px-3 py-2 ${pistol?.id === p.id ? 'bg-amber-300' : 'bg-white'}`}>{p.name}</button>)}
        </div>
      </section>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>3) Zırh</h2>
        <div className='flex flex-wrap gap-2'>
          {armorOptions.map((a) => <button key={a.id} onClick={() => setArmor(a)} className={`rounded-lg px-3 py-2 ${armor.id === a.id ? 'bg-amber-300' : 'bg-white'}`}>{a.name}</button>)}
        </div>
      </section>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>4) Utility</h2>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
          {utilities.map((u) => (
            <button key={u.id} onClick={() => setSelectedUtils((prev) => prev.includes(u.id) ? prev.filter((x) => x !== u.id) : [...prev, u.id])} className={`overflow-hidden rounded-xl border text-left ${selectedUtils.includes(u.id) ? 'border-amber-400 ring-2 ring-amber-300' : 'border-amber-100'}`}>
              <img src={u.image} alt={u.name} className='h-24 w-full object-cover' />
              <div className='p-2 text-sm font-medium text-slate-700'>{u.name}</div>
            </button>
          ))}
        </div>
      </section>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>5) Tuş Seç (Klavye)</h2>
        <div className='space-y-2'>
          {keyboardRows.map((row, i) => (
            <div key={i} className='flex flex-wrap gap-2'>
              {row.map((k) => (
                <button key={k} onClick={() => setSelectedKey(k)} className={`min-w-12 rounded-lg border px-3 py-2 text-sm ${selectedKey === k ? 'border-amber-500 bg-amber-300 text-slate-900' : 'border-amber-100 bg-white text-slate-700'}`}>
                  {k}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className='card space-y-3'>
        <h2 className='text-xl font-semibold text-slate-800'>Oluşan Komut</h2>
        <code className='block rounded-xl bg-amber-50 p-3 text-sm text-slate-800'>{bindCommand}</code>
        <CopyButton text={bindCommand} />
      </section>
    </div>
  );
}
