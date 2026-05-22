'use client';
import { useMemo, useState } from 'react';
import raw from '@/data/weapons.json';
import type { Weapon } from '@/lib/types';
import { CopyButton } from '@/components/copy-button';
const weapons = raw as Weapon[];
export default function CommandsPage(){const [q,setQ]=useState('');const [cat,setCat]=useState('All');const filtered=useMemo(()=>weapons.filter(w=>(cat==='All'||w.category===cat)&&`${w.name} ${w.command} ${w.aliases.join(' ')}`.toLowerCase().includes(q.toLowerCase())),[q,cat]);return <div className='space-y-4'><h1 className='text-3xl font-bold'>Weapon Commands</h1><div className='flex gap-2'><input value={q} onChange={e=>setQ(e.target.value)} placeholder='Search commands' className='w-full rounded bg-slate-800 p-2'/><select value={cat} onChange={e=>setCat(e.target.value)} className='rounded bg-slate-800 p-2'>{['All','Rifles','Pistols','SMGs','Heavy','Grenades','Equipment','Knives'].map(c=><option key={c}>{c}</option>)}</select></div>{filtered.length===0?<div className='card'>No commands found.</div>:<div className='grid gap-3 md:grid-cols-2'>{filtered.map(w=><div key={w.id} className='card'><h2 className='font-semibold'>{w.name}</h2><p className='text-sm text-slate-400'>{w.description}</p><code className='my-2 block rounded bg-black/40 p-2'>{w.command}</code><CopyButton text={w.command}/></div>)}</div>}</div>;}
