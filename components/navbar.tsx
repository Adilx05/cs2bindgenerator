'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links=['/','/commands','/binds','/crosshair','/cfg-generator','/practice','/lineups','/skins','/about'];
export function Navbar(){const p=usePathname();return <nav className='sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur'><div className='mx-auto flex max-w-6xl gap-2 overflow-auto p-3'>{links.map(l=><Link key={l} href={l} className={`rounded px-3 py-1 text-sm ${p===l?'bg-cyan-500 text-black':'bg-slate-800'}`}>{l==='/'?'home':l.slice(1)}</Link>)}</div></nav>;}
