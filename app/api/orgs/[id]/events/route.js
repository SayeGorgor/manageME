import { getCurrentUser, getOrgEvents } from "@/lib/server-actions";

export async function GET(req, { params }) {
    const { id } =  await params;

    const user = await getCurrentUser();

    console.log('User: ', user)

    const events = await getOrgEvents({ orgID: id, userID: user.id });

    if(!events) {
        return Response.json(
            { error: 'Internal Server Error' }, 
            { status: 500 }
        );
    }

    return Response.json(events, { status: 200 });
}