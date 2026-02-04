import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req) {
    const formData = await req.formData();
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const email = formData.get('email');
    const password = formData.get('password');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
        data: {
            first_name,
            last_name,
            email,
            password: hashedPassword
        }
    });

    if(!user) return Response.json(
        {success: false, error: 'Error Creating User'},
        {status: 400}
    );

    return Response.json(
        {success: true, user},
        {status: 201}
    );
}