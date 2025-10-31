'use server'

import { getBasicData, createUser, updateArch } from "@/app/DBServerActions/neonServerActions"
import RoutePusher from "../custom-components/routePusher";
import { currentUser } from '@clerk/nextjs/server'
//pull basic information for the clerk_id in question

// if clerk_id is there and they have an avatar_url -> send them to town
// if there's no user -> create the user, continue choosing

//when user clicks on either champion or seeker, update the DB and continue to onboarding



export default async function ChooseArch(){

    const user = await currentUser();
    const clerkUser = user?.id
    console.log(`Clerk userID is ${clerkUser}`)

    const result =  getBasicData(clerkUser)
    console.log(result)

    function seekerClick() {
        console.log('seeker!');
        RoutePusher('/seeker-onboard')
    }

        function champClick() {
        console.log('Champion!');
        RoutePusher('/talent-onboard')
    }
    return(
        <>
            <div className="text-white z-2">Choose Your Archetype</div>
            <button className="text-white z-2" onClick={seekerClick}> Seeker </button>
            <button className="text-white z-2" onClick={champClick}> Champion </button>
        </>
    )
}