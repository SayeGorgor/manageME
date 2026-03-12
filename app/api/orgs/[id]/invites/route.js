import { postInvite, getCurrentUser } from "@/lib/server-actions";

export async function POST(req, { params }) {
    const { id } = await params;
    const formData = await req.formData();
    const email = formData.get('email');

    const { data: user, error: userError } = await getCurrentUser();
    if(userError) return Response.json(
        { error: 'Unauthorized Request' },
        { status: 401 }
    );

    const { data: invite, error: inviteError } = await postInvite({ 
        userID: user.id,
        orgID: id,
        email,
    });
    if(inviteError) return Response.json(
        { 
            error: {
                message: inviteError.message, 
                status: inviteError.status ?? 500
            } 
        },
        { status: inviteError.status ?? 500 }
    );
    
    return Response.json({ data: invite }, { status: 201 }); 
}