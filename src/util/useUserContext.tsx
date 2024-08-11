import { createContext, useContext } from "react";
import { UserData } from "./type";

export type UserContent = {
    user: UserData | any;
    setUser: (d: UserData | any) => void;
}

export const UserContext = createContext<UserContent>({
    user: {},
    setUser: () => {}
})

export const useUserContext = () => useContext(UserContext);