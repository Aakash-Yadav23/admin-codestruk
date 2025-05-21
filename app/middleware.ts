import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from 'aws-amplify/auth';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    try {
        // Try to get current user
        const user = await getCurrentUser();
        // const user = await currentAuthenticatedUser();

        const isAuthenticated = !!user.username;

        // If user is authenticated and tries to access auth pages, redirect to dashboard
        if (
            ['/', '/register'].includes(pathname) &&
            isAuthenticated
        ) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        // If user is NOT authenticated and tries to access protected routes, redirect to login
        if (
            pathname.startsWith('/dashboard') &&
            !isAuthenticated
        ) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        // Allow the request to proceed
        return NextResponse.next();

    } catch (error) {
        // If there's an error fetching user, assume unauthenticated
        console.error('Authentication check failed:', error);
        return NextResponse.redirect(new URL('/', request.url));
    }
}

// Define which paths this middleware should run on
export const config = {
    matcher: ['/', '/register', '/dashboard/:path*'],
};