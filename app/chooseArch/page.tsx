'use server'

import { getBasicData, createUser, updateArch } from "@/app/DBServerActions/neonServerActions"
import { SeekerButton, ChampButton } from "./archButtons";
import { currentUser } from '@clerk/nextjs/server'
import RoutePusher from "../custom-components/routePusher";

export default async function ChooseArch(){

    const user = await currentUser();
    const clerkUser = user?.id
    console.log(`Clerk userID is ${clerkUser}`)

    const result =  await getBasicData(clerkUser)
    console.log(result['archetype'])

    //if user has an archetype, send them to town
    //if(result.archetype){
        //RoutePusher('/town')
    //}
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