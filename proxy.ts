import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { getBasicData, } from "@/app/DBServerActions/neonServerActions"


const isProtectedRoute = createRouteMatcher(['/chooseArch(.*)', '/seeker-onboard(.*)', '/talent-onboard(.*)', '/town(.*)',])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
  /*if (req.nextUrl.pathname.startsWith('/chooseArch')){
    const user = await currentUser();
    const clerkUser = user?.id
    const result =  await getBasicData(clerkUser)
    console.log(result['archetype'])
    return NextResponse.rewrite(new URL('/town', req.url))
  }*/
})

export function proxy(request: NextRequest) {
  if (request.url === '/chooseArch') {
    request.nextUrl.pathname = '/town'
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};