import Link from "next/link"
import MainAuthButton from "./mainAuthButton"

export default function MainNavBar(){
    return(
        <div className="fixed top-0 left-0 right-0 grid auto-cols-max grid-flow-col bg-transparent h-[9vh] w-screen justify-between items-center z-30">
            <Link href="/" className="m-2 text-red-700 text-lg font-medium text-shadow-lg ">Ta-V</Link>
            <Link href="/about" className="m-2 text-red-700 text-lg font-medium text-shadow-lg ">About</Link>
            <Link href="/vault" className="m-2 text-red-700 text-lg font-medium text-shadow-lg ">Vault</Link>
            <Link href="/town" className="m-2 text-red-700 text-lg font-medium text-shadow-lg ">Town</Link>
            <div className="m-2">
                <MainAuthButton />
            </div>
        </div>
    )
}