'use client'

import { useRouter } from "next/navigation";
import { use } from 'react'


export default function PBComponent({
  archetype,
}: {
  archetype: Promise<string>
}){

    const router = useRouter()
    const archs = use(archetype)

    if (archs == 'champion'){
        router.push('/talent-onboard')
    } else if (archs == 'seeker'){
        router.push('/seeker-onboard')
    } else

    return(
        <div>
            <div>Hang tight</div>
        </div>
    )
}
