import Header from "@/components/header";
import { getCurrentUser, getUserOrgs, getNotes } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { CurrentOrgProvider } from "@/lib/providers/current-org-provider";

export default async function DashboardLayout({ children }) {
    const queryClient = new QueryClient();
    const user = await getCurrentUser();
    if(!user) redirect('/');

    const memberships = await getUserOrgs(user.id);
    
    const {data: notes, error: notesError} = await getNotes({ userID: user.id });
    if(notesError) {
        let err = new Error(notesError.message);
        err.status = notesError.status;
        throw err;
    }

    queryClient.setQueriesData(['user'], user);
    queryClient.setQueriesData(['memberships'], memberships);
    queryClient.setQueriesData(['notes'], notes);

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CurrentOrgProvider initialOrg={memberships[0]}>
                <Header />
                { children }
            </CurrentOrgProvider>
        </HydrationBoundary>
    );
}