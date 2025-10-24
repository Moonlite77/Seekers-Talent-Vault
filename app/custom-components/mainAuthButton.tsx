import {
      SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function MainAuthButton (){
    return(
        <>
            <SignedOut>

                <SignUpButton>
                <button className="text-red-700 text-lg font-medium text-shadow-lg sm:text-base sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Login
                </button>
                </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
        </>
    )
}