import { getOrgMembers } from "@/lib/server-actions";

export async function GET(req, {params}) {
    const { id } = await params;
    const members = await getOrgMembers(id);

    if(!members) return Response.json(
        { error: 'Error Fetching Org Members' },
        { status: 401 }
    );

    return Response.json(members, {status: 200});
}