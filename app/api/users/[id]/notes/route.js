import { createNote, getNotes } from "@/lib/server-actions";

export async function GET(req, { params }) {
    const { id } = await params;
    
    const { data: notes, error } = await getNotes({ userID: id });
    if(error) {
        return Response.json(
            { error: error.message }, 
            { status: error.status }
        );
    }

    return Response.json(notes, {status: 200});
}

export async function POST(req, { params }) {
    const formData = await req.formData();
    const title = formData.get('title');
    const details = formData.get('details');

    const { id } = await params;

    const { error, data } = await createNote({ userID: id, title, details });
    if(error) return Response.json(
        {error: error.message}, {status: error.status}
    );

    return Response.json(data, { status: 201 });
}