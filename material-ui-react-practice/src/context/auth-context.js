import {
    createContext
} from "react";

export const AuthContext = createContext({
    userData:{
        userId: '',
        token: '',
        name: '',
        email: '',
        picture: '',
    },
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

