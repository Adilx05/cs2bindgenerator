'use client';

import { useState } from 'react';
import { CopyButton } from '@/components/copy-button';
import presets from '@/data/binds.json';

export default function BindsPage() {
  const [key, setKey] = useState('KP_1');
  const [action, setAction] = useState('give weapon_ak47');
  const [binds, setBinds] = useState<{ key: string; action: string }[]>([]);

  const cmd = `bind "${key}" "${action}"`;

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Bind Generator</h1>

      <div className='card space-y-2'>
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className='w-full rounded bg-slate-800 p-2'
          placeholder='Key'
        />
        <input
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className='w-full rounded bg-slate-800 p-2'
          placeholder='Action'
        />

        <code className='block rounded bg-black/40 p-2'>{cmd}</code>

        <div className='flex gap-2'>
          <button
            className='rounded bg-cyan-500 px-3 py-1 text-black'
            onClick={() => setBinds([...binds, { key, action }])}
          >
            Add bind
          </button>
          <CopyButton text={cmd} />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2 font-semibold'>Premade Packs</h2>
        {(presets as { key: string; action: string; pack: string }[]).map((b, i) => (
          <div key={i} className='text-sm'>
            {b.pack}: bind &quot;{b.key}&quot; &quot;{b.action}&quot;
          </div>
        ))}
      </div>
    </div>
  );
}
