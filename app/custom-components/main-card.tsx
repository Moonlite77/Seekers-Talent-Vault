import Link from "next/link";
import Image from 'next/image';

interface MainCardProps {
    imageSrc: string,
    cardLink: string,
    cardText: string,
}
export default function MainCard({imageSrc, cardLink, cardText}: MainCardProps){

    return(
      <Link href={cardLink} className='animate-(--animate-delayed-fade-in) relative w-[20vw] bg-stone-950 z-1 border border-2 rounded-md border-stone-950'>
        <Image sizes='100vw' src={imageSrc} width={1366} height={768} style={{objectFit: 'cover',}} alt="tarrot card with a character "></Image>
        <div className='h-[10vh] bg-red-800 overflow-auto border border-red-500 border-2 rounded-md mt-1 text-xl text-center'>{cardText}</div>
      </Link>
    )
}