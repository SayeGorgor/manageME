import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    const sessionID = cookieStore.get('session')?.value;

    if(sessionID) await prisma.sessions.delete({ where: { id: sessionID } });

    cookieStore.delete('session');

    return Response.json({ success: true }, { status: 200 });
}