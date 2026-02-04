import { getCurrentUser } from "@/lib/server-actions";

export async function GET() {
    const user = await getCurrentUser();

    if(!user) return Response.json({ error: 'Error Retrieving Session' }, { status: 401});

    return Response.json(user, { status: 200});
}