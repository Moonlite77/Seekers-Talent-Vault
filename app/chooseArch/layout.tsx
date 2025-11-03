import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { getBasicData, createUser, getArchetypeData } from "../DBServerActions/neonServerActions";

export default async function chooseArchLayout({chooseArchetype, sendToTown}: {
    chooseArchetype: React.ReactNode
    sendToTown: React.ReactNode}){

        const user = await currentUser();
        const clerkUser = user?.id
        console.log(`Clerk userID is ${clerkUser}`)
    
        const result =  await getBasicData(clerkUser)
    
        if (!result['clerk_id']){
            const createUserResult = await createUser(clerkUser)
            console.log(createUserResult)
            return (<>{chooseArchetype}</>)
        } 

        const hasArchetype = await getArchetypeData(clerkUser)
    return(
        <>{hasArchetype ? sendToTown : chooseArchetype}</>
    )

}