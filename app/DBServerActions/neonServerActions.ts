'use server'

import { neon } from "@neondatabase/serverless"


const sql = neon(`${process.env.DATABASE_URL}`);

export async function getBasicData(clerkID: string | undefined){
    const result = await sql`SELECT * FROM clerks WHERE clerk_id = ${clerkID}`
    const response = result[0]
    return(
        response
    )
}

export async function createUser(clerkID: string | undefined){
    const result = await sql`
    INSERT INTO clerks (clerk_id)
    VALUES (${clerkID})
    `
    const response = result[0]
    return(
        response
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