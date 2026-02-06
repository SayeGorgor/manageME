import Header from "@/components/header";
import { getCurrentUser, getUserOrgs } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { CurrentOrgProvider } from "@/lib/providers/current-org-provider";

export default async function DashboardLayout({ children }) {
    const queryClient = new QueryClient();
    const user = await getCurrentUser();
    if(!user) redirect('/');

    const memberships = await getUserOrgs(user.id);

    queryClient.setQueriesData(['user'], user);
    queryClient.setQueriesData(['memberships'], memberships);

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CurrentOrgProvider initialOrg={memberships[0]}>
                <Header />
                { children }
            </CurrentOrgProvider>
        </HydrationBoundary>
    );
}