import Link from "next/link";

export default function AlreadyHaveArchPage(){
    return(
        <div className="z-3">
            <div className="text-white">You already have an Archetype assigned, please continue to town</div>
            <Link href={'/town'}>Contine to Town</Link>
        </div>
    )
}