import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
    const { id } = await params;

    console.log('ID: ', id);

    try {
        const orgs = await prisma.memberships.findMany({
            where: {user_id: id},
            select: {
                role: true,
                org: {
                    select: {
                        id: true,
                        name: true,
                        pfp: true
                    }
                }
            }
        });
        
        return Response.json(orgs, {status: 200});
    } catch(error) {
        return Response.json(
            {error: 'No Organizations Were Able to Be Retrieved'},
            {status: 404}
        );
    }
}