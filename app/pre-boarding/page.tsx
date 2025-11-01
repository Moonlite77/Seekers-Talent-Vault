'use server'

import { currentUser } from "@clerk/nextjs/server";
import { getBasicData } from "../DBServerActions/neonServerActions";
import PBComponent from "../dbServerComponents/pre-boardingComponent";
import { Suspense } from 'react'



export default async function PreboardingComponent(){
    const user = await currentUser()
    const userID = user?.id
    const result = await getBasicData(userID)
    const resultingArch = result['archetype']
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PBComponent archetype={resultingArch} ></PBComponent>
            </Suspense>        
        </div>
    )

}




    
    