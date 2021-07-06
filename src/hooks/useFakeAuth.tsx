import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
    name:string;
    position: string;
}

interface FakeAuthContextData {
    user: User;
    getUser: ( name: string, position: string ) => void;
}

interface FakeAuthProviderProps {
    children: ReactNode;
}

const FakeAuthContext = createContext<FakeAuthContextData>(
    {} as FakeAuthContextData);

export function FakeAuthProvider ( {children} : FakeAuthProviderProps) {

    const [ user, setUser ] = useState({} as User) ;

    function getUser(name: string, position: string) {

        setUser({
            name: name,
            position: position
        })
    }

    return (
        <FakeAuthContext.Provider 
            value={ {user, getUser} } >
            {children}
        </FakeAuthContext.Provider>
    );

}

export function useFakeAuth() {
    const context = useContext(FakeAuthContext);

    return context;
}