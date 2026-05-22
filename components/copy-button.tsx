'use client';
import { useState } from 'react';
export function CopyButton({text}:{text:string}){const [ok,setOk]=useState(false);return <button className='rounded bg-cyan-500 px-2 py-1 text-black' onClick={async()=>{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),1500);}}>{ok?'Copied':'Copy'}</button>;}
