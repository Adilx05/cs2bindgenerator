'use client';
import presets from '@/data/crosshairs.json';
import { useState } from 'react';
import { CopyButton } from '@/components/copy-button';
export default function CrosshairPage(){const [code,setCode]=useState((presets as any[])[0].code);return <div className='space-y-4'><h1 className='text-3xl font-bold'>Crosshair Generator</h1><div className='card'><input value={code} onChange={e=>setCode(e.target.value)} className='w-full rounded bg-slate-800 p-2'/><div className='mt-2 flex gap-2'><CopyButton text={code}/>{(presets as any[]).map(p=><button className='rounded bg-slate-700 px-2 py-1' key={p.name} onClick={()=>setCode(p.code)}>{p.name}</button>)}</div></div></div>;}
