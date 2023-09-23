import { createContext, useState } from "react";

const GrantContext = createContext({});

export const GrantProvider = ({ children }) => {
    const [grant, setGrant] = useState({});

    return (
        <GrantContext.Provider value={{ grant, setGrant }}>
            {children}
        </GrantContext.Provider>
    )
}

export default GrantContext;