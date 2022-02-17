
export interface User{
    id: string;
    name: string;
}


type AuthState = {
    checking: boolean,
    user?: User
}

type AuthAction = {
    type: string,
    payload?: User
}

const initialState: AuthState = {
    checking: true,
}

export const authReducer = ( state = initialState, action: AuthAction)=>{
    switch (action.type) {
        default:
            return state;
    }
}