import { SeekerButton, ChampButton } from "../archButtons"

export default async function chooseArchPage(){
    return(
                <div>
                    <div className="text-white z-3">Choose Your Archetype</div>
                    <SeekerButton />
                    <ChampButton />
                </div>
    )
}