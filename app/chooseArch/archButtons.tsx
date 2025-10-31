'use client'

import RoutePusher from "../custom-components/routePusher"

export function SeekerButton(){
    function seekerClick() {
        console.log('seeker!');
        RoutePusher('/seeker-onboard')
    }
    return(
        <button className="text-white z-2" onClick={seekerClick}> Seeker </button>
    )
}

export function ChampButton(){
    function champClick() {
        console.log('Champion!');
        RoutePusher('/talent-onboard')
    }
    return(
        <button className="text-white z-2" onClick={champClick}> Seeker </button>
    )
}