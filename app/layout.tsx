import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
export const metadata: Metadata = {title:'CS2 Arsenal',description:'Premium CS2 utility platform',openGraph:{title:'CS2 Arsenal',description:'Commands, binds, cfg and practice tools'},icons:{icon:'/favicon.ico'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><Navbar/><main className='mx-auto max-w-6xl p-4'>{children}</main></body></html>;}
