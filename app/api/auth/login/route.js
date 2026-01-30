import { authenticateUser } from "@/lib/server-actions";
import { redirect } from "next/navigation";

export async function POST(req) {
    const formData = await req.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const { success, user } = await authenticateUser({email, password});

    if(!success) return Response.json(
        {success: false, error: 'Invalid Credentials'},
        {status: 401}
    );

    return Response.json({ success: true, user });
}