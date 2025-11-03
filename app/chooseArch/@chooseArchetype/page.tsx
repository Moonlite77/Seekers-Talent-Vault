import { SeekerButton, ChampButton } from "../archButtons"
import MainCard from "@/app/custom-components/main-card"

export default async function chooseArchPage(){
    return(
                <div className="grid grid-cols-2 z-3">
                    <div className="col-span-2 text-white">Choose Your Archetype</div>
                    <MainCard
                        imageSrc="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/9a03db4c-fbeb-461c-e0ae-6090a2760000/public"
                        cardLink="/seeker-onboard" 
                        cardText="For the schrewd recruiter or anyone who seeks champions looking for opportunities."
                            />
                    <MainCard
                        imageSrc="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/b4869a9d-6cd3-496e-416e-2d3ae143c200/public"
                        cardLink="/talent-onboard" 
                        cardText="For the talented individuals who seek opportunities."
                            />

                </div>
    )
}