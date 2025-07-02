import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow requests for API routes, Next.js assets, and files with extensions (e.g. public files)
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    /\..*$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Redirect all other paths to the homepage, if they are not the homepage already.
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
