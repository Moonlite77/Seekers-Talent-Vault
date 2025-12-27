'use server'

import { neon } from "@neondatabase/serverless"


const sql = neon(`${process.env.DATABASE_URL}`);

export async function getBasicData(clerkID: string | undefined){
    try {
        const result = await sql`SELECT * FROM clerks WHERE clerk_id = ${clerkID}`
        return(
            result[0]
        )
    } catch(error: any){
        console.error("Database error:", error.message);
        throw new Error("Neon server action failed to get basic data. Maybe the user does not exist")
    }

}

export async function getArchetypeData(clerkID: string | undefined){
    const result = await sql`
        SELECT * FROM clerks WHERE clerk_id = ${clerkID}`
    const response = result[0]
    const archetype: string = response['archetype']
    return(
        archetype
    )
}

export async function createUser(clerkID: string | undefined){
    try {    const result = await sql`
    INSERT INTO clerks (clerk_id)
    VALUES (${clerkID})
    RETURNING *
    `
    return(result[0])
    } catch (error: any){
        console.error("Database error:", error.message);
        throw new Error("Failed to create user");
    }

}

export async function updateArch(clerkID: string, archetype: string){

    const result = await sql`
    UPDATE clerks SET archetype = ${archetype} WHERE clerk_id = ${clerkID}
    `

    return(
        result
    )
}