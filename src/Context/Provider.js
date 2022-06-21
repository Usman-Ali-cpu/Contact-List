import { createContext, useReducer } from "react";
import React  from 'react';
import auth from "./reducers/auth";
import authStates from "./initialStates/authStates";
import authContactStates from "./initialStates/authContactStates";
import authContact from "./reducers/contact";

export const GlobalContext = createContext({});

const GlobalProvider = ({children})=>{
    const  [authState, authDispatcher] = useReducer(auth, authStates);
    const  [ContactStates, contactDispatcher] = useReducer(authContact, authContactStates);
    return(
        <GlobalContext.Provider value={{authState, ContactStates, authDispatcher, contactDispatcher}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;