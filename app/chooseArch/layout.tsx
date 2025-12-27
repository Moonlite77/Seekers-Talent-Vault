import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { getBasicData, createUser, getArchetypeData } from "../DBServerActions/neonServerActions";

export default async function chooseArchLayout({chooseArchetype, sendToTown}: {
    chooseArchetype: React.ReactNode
    sendToTown: React.ReactNode}){

        const user = await currentUser();
        const clerkUser = user?.id
        if (!clerkUser){
            return <div>Our server had an issue grabbing your Clerk ID. Are you sure you're logged in?</div>
        }
        console.log(`Your Clerk userID is ${clerkUser}`)
    
        try {
            const result =  await getBasicData(clerkUser)
            if (!result){
                console.log('Creating a user in the DB...')
                const createUserResult = await createUser(clerkUser)
                console.log(createUserResult)
                if (createUserResult.clerk_id == user?.id){
                    return (<>{chooseArchetype}</>)
            } else {
                return <div>There was an error in the attempt to create a user for you in our Database</div>
            }
            
            } else {
                const hasArchetype = await getArchetypeData(clerkUser)
                return <>{hasArchetype ? sendToTown : chooseArchetype}</>
            }
        } catch(error: any){
            return (
            <div>
                <div>{error}</div>
                <div>Our server is having issues getting your data from the database</div>
            </div>
            )
        }
        
}