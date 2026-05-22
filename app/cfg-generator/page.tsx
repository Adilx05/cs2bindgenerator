'use client';
import { CopyButton } from '@/components/copy-button';
const cfg=`sv_cheats 1\nmp_limitteams 0\nmp_autoteambalance 0\nmp_roundtime_defuse 60\nmp_freezetime 0\nmp_buy_anywhere 1\nmp_buytime 9999\nammo_grenade_limit_total 5\nsv_infinite_ammo 1\nbot_kick`;
export default function CfgPage(){return <div className='space-y-4'><h1 className='text-3xl font-bold'>CFG Generator</h1><pre className='card whitespace-pre-wrap'>{cfg}</pre><CopyButton text={cfg}/></div>;}
