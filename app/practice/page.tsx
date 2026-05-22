import { CopyButton } from '@/components/copy-button';
const launch='-novid -tickrate 128 +exec autoexec';
export default function Practice(){return <div className='space-y-3'><h1 className='text-3xl font-bold'>Practice Tools</h1><div className='card'>One Click Practice Setup includes noclip, grenade trajectory and infinite ammo.</div><div className='card'><code>{launch}</code><div className='mt-2'><CopyButton text={launch}/></div></div></div>;}
