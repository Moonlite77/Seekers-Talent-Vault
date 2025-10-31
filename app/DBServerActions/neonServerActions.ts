'use server'

import { neon } from "@neondatabase/serverless"


const sql = neon(process.env.DATABASE_URL!)

export async function getBasicData(clerkID: string | undefined){
    if(clerkID == undefined){
        return({success: false, error: 'clerkID was undefined'})
    }
    const result = await sql`
    SELECT * FROM clerks WHERE clerk_id = ${clerkID};
    `

    return(
        result
    )
}

export async function createUser(clerkID: string){

    const result = await sql`
    INSERT INTO clerks (clerk_id)
    VALUES (${clerkID})
    `

    return(
        result
    )
}

export async function updateArch(clerkID: string, archetype: string){

    const result = await sql`
    UPDATE clerks SET archetype = ${archetype} WHERE clerk_id = ${clerkID}
    `

    return(
        result
    )
}