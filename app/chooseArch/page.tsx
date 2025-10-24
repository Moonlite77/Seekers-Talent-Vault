import MainCard from "../custom-components/main-card"

//to-do create a clark action -> create user in a database whenever a clark user is created
//first checks database for "archetype"
//then checks localstorage for Archetype.
//previous data ? popupAskingContinueOrDeletePrevData : doNothing

//If user clicks seeker -> Creates all the localstrorage strings and writes 'seeker' for archetype
//If user clicks champion -> Creates all the localstrorage strings and writes 'champion' for archetype

export default function ChooseArch(){
    return(
        <div className="text-white z-2">Choose Your Archetype</div>
    )
}