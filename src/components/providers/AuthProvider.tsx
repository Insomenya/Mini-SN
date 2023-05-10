import { FC, createContext, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { users } from "../layout/sidebar/dataUser";
import { useNavigate } from "react-router-dom";

interface IContext {
    user: IUser | null
    setUser: TypeSetState<IUser | null>
    ga: Auth
}

interface NodeChildren {
    children: React.ReactNode
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: NodeChildren) => {

    const [user, setUser] = useState<IUser | null>(null)

    const ga = getAuth()

    useEffect(() => {
        const unListen = onAuthStateChanged(ga, authUser => {
            if (authUser) {
                setUser({
                    _id: authUser.uid,
                    avatar: users[0].avatar,
                    name: authUser?.displayName || ''
                })
            } else {
                setUser(null)
            }
        })
        
        return () => {
            unListen()
        }
    }, [])

    const values = useMemo(() => ({
        user,
        setUser,
        ga
    }), [user])

    return (
        <AuthContext.Provider value={{ user, setUser, ga }}>
            {children}
        </AuthContext.Provider>
    )
}