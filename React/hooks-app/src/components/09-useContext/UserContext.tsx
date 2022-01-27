import { createContext } from "react";
import { User } from "./MainApp";

type UserContexType = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}


export const UserContext = createContext<UserContexType>({} as UserContexType);