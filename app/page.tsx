'use client'
 
import Image from 'next/image';
import Link from 'next/link'
import MainCard from './custom-components/main-card';
import { useLinkStatus } from 'next/link'

export default function Home() {
  return (
    <div className='grid grid-cols-2 w-[90vw] h-[80vh] justify-items-center items-center bg-transparent'>

      <div className='absolute object-center grid justify-center items-center w-[90vw] opacity-0 animate-(--animate-fade-in-out)'>
        <h1 className="text-9xl font-semibold font-stretch-ultra-expanded text-shadow-sm text-shadow-red-950/20">Talent Vault</h1>
      </div>

      <MainCard
        imageSrc='https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/4c6aa166-aa25-401d-8a8d-b5ee5a723b00/public'
        cardLink='/about'
        cardText='Curious about Talent Vault?'
        />

      <MainCard 
        imageSrc="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/27e12267-2fee-48d6-904e-7818cfc6ba00/public"
        cardLink='/chooseArch'
        cardText='Shall we begin?'
        />

    </div>
    
  );
}
