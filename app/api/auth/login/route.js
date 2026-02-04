import { authenticateUser } from "@/lib/server-actions";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    const formData = await req.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const { success, userID } = await authenticateUser({email, password});

    if(!success) return Response.json(
        {error: 'Invalid Credentials'},
        {status: 401}
    );

    const cookieStore = await cookies();

    const sessionID = uuid();
    const maxAgeSeconds = 60 * 60 * 24 * 7;

    cookieStore.set('session', sessionID, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: maxAgeSeconds
    });

    await prisma.sessions.create({
        data: {
            id: sessionID,
            user_id: userID,
            expires_at: new Date(Date.now() + maxAgeSeconds* 1000)
        }
    });

    return Response.json({status: 200});
}