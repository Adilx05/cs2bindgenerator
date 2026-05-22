'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links=['/','/commands','/binds','/crosshair','/cfg-generator','/practice','/lineups','/skins','/about'];
export function Navbar(){const p=usePathname();return <nav className='sticky top-0 z-50 border-b border-amber-200 bg-white/90 backdrop-blur'><div className='mx-auto flex max-w-6xl gap-2 overflow-auto p-3'>{links.map(l=><Link key={l} href={l} className={`rounded-lg px-3 py-1 text-sm capitalize ${p===l?'bg-amber-300 text-slate-900':'bg-amber-50 text-slate-700 hover:bg-amber-100'}`}>{l==='/'?'home':l.slice(1)}</Link>)}</div></nav>;}
