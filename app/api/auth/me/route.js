import { getCurrentUser } from "@/lib/server-actions";

export async function GET() {
    const {data: user, error} = await getCurrentUser();

    if(error) return Response.json(
        { error: 'Error Retrieving Session' }, 
        { status: 401 }
    );

    return Response.json(user, { status: 200 });
}