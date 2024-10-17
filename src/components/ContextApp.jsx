import { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [playPause, setPlayPause]= useState(false); 
    return(
        <AppContext.Provider value={{playPause, setPlayPause}}>
            {children}
        </AppContext.Provider>
    )
}