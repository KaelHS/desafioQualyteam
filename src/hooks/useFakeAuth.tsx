import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface FakeAuthContextData {
    setUser: ( name: string, position: string ) => void;
    removeUser: ( ) => void;
}

interface FakeAuthProviderProps {
    children: ReactNode;
}

const FakeAuthContext = createContext<FakeAuthContextData>(
    {} as FakeAuthContextData);

export function FakeAuthProvider ( {children} : FakeAuthProviderProps) {

    function setUser(name: string, position: string) {

        localStorage.setItem('name', name);
        localStorage.setItem('position', position);
    }

    function removeUser(){

        localStorage.setItem('name', '');
        localStorage.setItem('position', '');
    
        
    }

    return (
        <FakeAuthContext.Provider 
            value={ { setUser, removeUser} } >
            {children}
        </FakeAuthContext.Provider>
    );

}

export function useFakeAuth() {
    const context = useContext(FakeAuthContext);

    return context;
}