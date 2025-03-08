import { createContext, useContext, useState } from "react";


const NavContext = createContext();

export const useNavContext=()=> useContext(NavContext);

export const NavProvider=({children})=>{
    const [active,setActive]=useState('');
    return(
        <NavContext.Provider value={{active,setActive}}>
            {children}
        </NavContext.Provider>
    )
}