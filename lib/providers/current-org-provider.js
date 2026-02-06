'use client';

import { createContext, useContext, useState } from "react";

const CurrentOrgContext = createContext(null);

export function CurrentOrgProvider({ initialOrg, children }) {
    const [currentOrg, setCurrentOrg] = useState(initialOrg);

    return(
        <CurrentOrgContext.Provider value={{ currentOrg, setCurrentOrg }}>
            {children}
        </CurrentOrgContext.Provider>
    );
}

export const useOrg = () => useContext(CurrentOrgContext);