'use client';

import { useState } from "react";
import { 
  useQuery, 
  useQueryClient, 
  useMutation,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

export default function TanstackProvider({ children }) {
    const [queryClient] = useState(() => new QueryClient());
    
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}