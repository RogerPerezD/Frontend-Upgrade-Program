import { createContext } from "react";
import { ActionReducer, UserState } from "./authReducer";

type Auth = {
    user: UserState
    dispatch: React.Dispatch<ActionReducer>
}

export const AuthContext = createContext( {} as Auth);