'use client'

import Link from "next/link";

export function SeekerButton(){
    return(
        <Link className="text-white z-2" href={'/seeker-onboard'}> Seeker </Link>
    )
}

export function ChampButton(){

    return(
        <Link className="text-white z-2" href={'/talent-onboard'}> Champion </Link>
    )
}