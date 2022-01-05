import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {

    // Token will exist if user is logged in 
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;

    // Allow the requests if;-
    // 1 - It is a request for next-auth session and provider fetching 
    // 2-  The token exists

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    } 

    // Redirect to login if no token and they are requesting a protected route

    if (!token && pathname !== '/login') {
        return NextResponse.redirect("/login");
    }
    
};