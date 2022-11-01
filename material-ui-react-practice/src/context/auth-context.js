import {
    createContext
} from "react";

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

