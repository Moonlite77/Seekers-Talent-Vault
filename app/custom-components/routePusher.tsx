'use client'
import { useRouter } from "next/navigation"

export default function RoutePusher(route: string){
    const router = useRouter()
    return(
        router.push(route)
    )
}