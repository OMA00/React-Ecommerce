import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

//Create custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  // clean up in cases where user already stored - good to have
  () => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  };
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  // load state
  const [isLoading, setisLoading] = useState(false);
  // Error state
  const [error, setError] = useState(null);

  //Endpoint we need to hitto get the data

  const API_URL =
    "https://https://e-commerce-backend-hq8n-git-main-oma-ighomrores-projects.vercel.app/api/auth" ||
    "https://localhost:3001";

  useEffect(() => {
    if (token && !user) {
      fetchProfile();
    }
  }, [token]);

  //Helpers: save session

  const saveSession = (tokenValue, userValue) => {
    setToken(tokenValue);
    setUser(userValue);
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("user", JSON.stringify(userValue));
  };

  //Helpers: clear session
  const clearSession = (tokenValue, userValue) => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(tokenValue);
    localStorage.removeItem(userValue);
  };
};
