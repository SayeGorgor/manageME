import { getCurrentUser, getUserTasks } from "@/lib/server-actions";

export async function GET(req, {params}) {
    const { id } = await params;

    try {
        const {data: user, error: userError } = await getCurrentUser();

        if(userError) {
            return Response.json(
                { error: 'Unable to fetch tasks' }, 
                { status: 401 }
            );
        }

        const tasks = await getUserTasks({ userID: user.id, orgID: id });

        if(!tasks) {
            return Response.json(
                { error: 'Unable to fetch tasks' }, 
                { status: 401 }
            );
        }

        return Response.json(tasks, {status: 200});
    } catch(err) {
        return Response.json(
            {error: 'Internal Server Error'}, 
            {status: 500}
        );
    }
}