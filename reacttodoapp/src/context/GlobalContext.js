import React, {createContext, useState} from "react";

export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [globalValue, setGlobalValue] = useState('Global Value');

    return (
        <globalContext.Provider value = {{globalValue, setGlobalValue}}>
            {children}
        </globalContext.Provider> 
    );
};