import Header from "@/components/header";
import { getCurrentUser, getUserOrgs } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function DashboardLayout({ children }) {
    const queryClient = new QueryClient();
    const user = await getCurrentUser();
    if(!user) redirect('/');

    const memberships = await getUserOrgs(user.id);

    console.log('Orgs: ', memberships);

    queryClient.setQueriesData(['user'], user);
    queryClient.setQueriesData(['memberships'], memberships);

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            { children }
        </HydrationBoundary>
    );
}