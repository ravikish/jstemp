import React, {createContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [globalValue, setGlobalValue] = useState('Global Value');

    return (
        <GlobalContext.Provider value = {{globalValue, setGlobalValue}}>
            {children}
        </GlobalContext.Provider> 
    );
};