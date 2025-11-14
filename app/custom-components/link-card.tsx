import Link from "next/link";
import Image from 'next/image';

interface LinkCardProps {
    imageSrc: string,
    cardLink: string,
    cardText: string,
    cardTitle: string | null,
}
export default function LinkCard({imageSrc, cardLink, cardText, cardTitle}: LinkCardProps){

    return(
      <Link href={cardLink} className='relative w-[20vw] bg-transparent z-1 border border-2 rounded-md border-stone-950'>
        <div className="grid grid-cols justify-items-center">
          <div className="text-5xl text-center font-semibold font-stretch-ultra-expanded text-shadow-sm text-shadow-red-950/20">{cardTitle}</div>
        </div>
        <Image sizes='100vw' src={imageSrc} width={1366} height={768} style={{objectFit: 'cover',}} alt="tarrot card with a character "></Image>
        <div className='h-[10vh] bg-red-800 overflow-auto border border-red-500 border-2 rounded-md mt-1 text-xl text-center'>{cardText}</div>
      </Link>
    )
}