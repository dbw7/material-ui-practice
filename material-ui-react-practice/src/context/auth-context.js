import {
    createContext, useState
} from "react";

const AuthContext = createContext({
    token: '',
    userData:{
        userId: '',
        name: '',
        email: '',
        picture: '',
    },
    isLoggedIn: false,
    login: (token, userData) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    
    const userIsLoggedIn = !!token;
    
    const loginHandler = (token, userData) => {
        setToken(token);
        setUserData(userData);
    };
    
    const logoutHandler = () => {
        setToken(null);
        setUserData(null);
    }
    
    const contextValue = {
        token: token,
        userData: userData,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;