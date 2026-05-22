'use client';

import { useMemo, useState } from 'react';
import { CopyButton } from '@/components/copy-button';

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
  { id: 'defuse', name: 'Defuse Kit', cmd: 'buy defuser', image: '/weapon-icons/defuse.svg' }
];

const keyboardRows = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M'], ['KP_1', 'KP_2', 'KP_3', 'KP_4', 'KP_5', 'KP_6', 'KP_7', 'KP_8', 'KP_9', 'KP_0']];

const allWeapons = [...rifles, ...snipers, ...smgs, ...heavy, ...pistols, ...utility];

export default function BindsPage() {
  const [selectedKey, setSelectedKey] = useState('KP_1');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const commands = useMemo(() => allWeapons.filter((w) => selectedItems.includes(w.id)).map((w) => w.cmd), [selectedItems]);
  const bindCommand = useMemo(() => `bind "${selectedKey}" "${commands.join('; ')}"`, [selectedKey, commands]);

  const toggle = (id: string) => setSelectedItems((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const section = (title: string, items: BuyItem[]) => (
    <section className='card space-y-3'>
      <h2 className='text-xl font-semibold text-slate-800'>{title}</h2>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((w) => (
          <button key={w.id} onClick={() => toggle(w.id)} className={`overflow-hidden rounded-xl border text-left ${selectedItems.includes(w.id) ? 'border-amber-400 ring-2 ring-amber-300' : 'border-amber-100'}`}>
            <img src={w.image} alt={w.name} className='h-28 w-full object-contain bg-slate-100 p-3' />
            <div className='p-2 font-medium text-slate-700'>{w.name}</div>
          </button>
        ))}
      </div>
    </section>
  );

  return <div className='space-y-6'>
    <h1 className='text-3xl font-bold text-slate-800'>CS2 Buy Bind Generator</h1>
    <p className='text-slate-600'>Select weapons and utility, choose a key, and copy your bind command.</p>
    {section('Rifles', rifles)}
    {section('Sniper Rifles', snipers)}
    {section('SMGs', smgs)}
    {section('Heavy', heavy)}
    {section('Pistols', pistols)}
    {section('Utility & Gear', utility)}
    <section className='card space-y-3'><h2 className='text-xl font-semibold text-slate-800'>Bind Key</h2><div className='space-y-2'>{keyboardRows.map((row, i) => <div key={i} className='flex flex-wrap gap-2'>{row.map((k) => <button key={k} onClick={() => setSelectedKey(k)} className={`min-w-12 rounded-lg border px-3 py-2 text-sm ${selectedKey === k ? 'border-amber-500 bg-amber-300 text-slate-900' : 'border-amber-100 bg-white text-slate-700'}`}>{k}</button>)}</div>)}</div></section>
    <section className='card space-y-3'><h2 className='text-xl font-semibold text-slate-800'>Generated Command</h2><code className='block rounded-xl bg-amber-50 p-3 text-sm text-slate-800'>{bindCommand}</code><CopyButton text={bindCommand} /></section>
  </div>;
}
