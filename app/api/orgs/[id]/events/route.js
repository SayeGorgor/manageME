import { getCurrentUser, getOrgEvents } from "@/lib/server-actions";

export async function GET(req, { params }) {
    const { id } =  await params;

    const {data: user, error: userError } = await getCurrentUser();
    if(userError) return Response.json(
        { error: userError.message },
        { status: userError.status ?? 404 }
    );

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