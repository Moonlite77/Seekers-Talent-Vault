'use client'

import { getBasicData, createUser, updateArch } from "@/app/DBServerActions/neonServerActions"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
//pull basic information for the clerk_id in question

// if clerk_id is there and they have an avatar_url -> send them to town
// if there's no user -> create the user, continue choosing

//when user clicks on either champion or seeker, update the DB and continue to onboarding



export default function ChooseArch(){

    const { user } = useUser();
    const router = useRouter();

    const clerkUser = user?.id

    function seekerClick() {
        console.log('seeker!');
        router.push('/seeker-onboard')
    }

        function champClick() {
        console.log('Champion!');
        router.push('/talent-onboard')
    }
    return(
        <>
            <div className="text-white z-2">Choose Your Archetype</div>
            <button className="text-white z-2" onClick={seekerClick}> Seeker </button>
            <button className="text-white z-2" onClick={champClick}> Champion </button>
        </>
    )
}