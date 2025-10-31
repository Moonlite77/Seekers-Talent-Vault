'use server'

import { getBasicData, createUser, updateArch } from "@/app/DBServerActions/neonServerActions"
import { SeekerButton, ChampButton } from "./archButtons";
import { currentUser } from '@clerk/nextjs/server'
//pull basic information for the clerk_id in question

// if clerk_id is there and they have an avatar_url -> send them to town
// if there's no user -> create the user, continue choosing

//when user clicks on either champion or seeker, update the DB and continue to onboarding



export default async function ChooseArch(){

    const user = await currentUser();
    const clerkUser = user?.id
    console.log(`Clerk userID is ${clerkUser}`)

    const result =  await getBasicData(clerkUser)
    console.log(result)

    //If a user doesn't exist, result evaluates to undefined
    //then INSERT the user into the table if the user doesn't exist.
    if (!result){
        const createUserResult = await createUser(clerkUser)
        console.log(createUserResult)
    }

    return(
        <>
            <div className="text-white z-2">Choose Your Archetype</div>
            <SeekerButton />
            <ChampButton />
        </>
    )
}