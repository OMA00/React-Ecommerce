import { createContext, useContext, useState} from "react";

const AuthContext = createContext();

// Create some hooks

export const useAuth = () => {

    const context = useContext(AuthContext);
    if(!context){
      throw new error("useAuth must be used within an AuthProvider");
    }
};

export const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [token, setToken] = useState(localStorage.getItem(token) || null);
     const [isloading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);


// Endpoint we need to hit to get this data

const API_URL = "https://e-commerce-backend-hq8n.vercel.app/api/auth" || "http://localhost:3001";

useEffect((){
    if(token){
       fetchProfile();
    }
},[token]);



// Special functions being sent out

const register = async(name, email, password) => {};
const login = async(email, password) => {};
const fetchProfile = async () => {};
const logout = async () => {};


const contextValue = {
     // States
     user,
     token,
     isloading,
     error,

     //Functions
     register,
     login,
     fetchProfile,
     logout,

     // Auth check
     isAuthenticated: !!token && !!user,
};


return(<AuthContext.provider value={contextValue}>{children}</AuthContext.provider>);

};