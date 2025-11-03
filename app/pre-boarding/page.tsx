'use server'

import { currentUser } from "@clerk/nextjs/server";
import { getArchetypeData } from "../DBServerActions/neonServerActions";
import PBComponent from "../dbClientComponents/pre-boardingComponent";
import { Suspense } from 'react'


//TO DO - Get rid of this route. Keeping for now in case I need a refresher on react's 'use' hook and passing data to and from components.

export default async function PreboardingComponent(){
    const user = await currentUser()
    const userID = user?.id
    const result = getArchetypeData(userID)
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PBComponent archetype={result} ></PBComponent>
            </Suspense>        
        </div>
    )

}




    
    