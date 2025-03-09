import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname, origin } = request.nextUrl;

    const userAgent = request.headers.get('user-agent')?.toLowerCase();
    if (userAgent?.includes('curl') || userAgent?.includes('postman')) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    if (pathname.startsWith('/api/')) {
        const referer = request.headers.get('referer');
        if (!referer || !referer.startsWith(origin)) {
            return new NextResponse('Forbidden', { status: 403 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/:path*',
    ]
};