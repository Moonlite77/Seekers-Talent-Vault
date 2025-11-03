import { SeekerButton, ChampButton } from "../archButtons"
import MainCard from "@/app/custom-components/main-card"
import LinkCard from "@/app/custom-components/link-card"

export default async function chooseArchPage(){
    return(
                <div className="grid grid-cols-3 z-3">
                    
                    <LinkCard
                        imageSrc="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/9a03db4c-fbeb-461c-e0ae-6090a2760000/public"
                        cardLink="/seeker-onboard" 
                        cardText="For the schrewd recruiter or talent seeker."
                            />
                    <div className="grid justify-items-center items-center text-white">
                        <div>Choose your archetype </div>
                    </div>
                    <LinkCard
                        imageSrc="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/b4869a9d-6cd3-496e-416e-2d3ae143c200/public"
                        cardLink="/talent-onboard" 
                        cardText="For the talented individuals who seek opportunities."
                            />

                </div>
    )
}