import Image from 'next/image'

export default function MainBackground (){
    return (
        <div className="bg-black h-screen w-full border-2 border-red-500/10 overflow-hidden absolute">
            <Image src='https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/9ba6db8b-ddf6-402c-5d15-4f0599f4f900/public' 
                   quality={100}
                   alt='none'
                   sizes="100vw"
                   fill
                   style={{
                    objectFit: 'cover'
                   }}
            />
        </div>
    )
}