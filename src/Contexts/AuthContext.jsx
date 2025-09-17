import { Children } from "react";
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

  //Register
  const register = async (name, email, password) => {
    setisLoading(true);
    setError(false);

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || `Error ${res.status}`);

      //response
      saveSession(data.token, data.value);
    } catch (error) {
      setError(error.message);

      throw error;
    } finally {
      setisLoading(false);
    }
  };

  //Login
  const login = async (email, password) => {
    setisLoading(true);
    setError(false);

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || `Error${res.status}`);

      saveSession(data.token, data.user);
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setisLoading(false);
    }
  };

  //Profile
  const fetchProfile = async () => {
    if (!token) return null;
    setisLoading(true);
    setError(false);

    try {
      const res = await fetch(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res) throw new Error(data?.message || `Error ${res.status}`);

      if (data?.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data;
      }
    } catch (error) {
      // token becomes invalid logout silently
      clearSession();
      setError(error.message);

      return null;
    } finally {
      setisLoading(false);
    }
  };

  // Logout
  const logout = () => {
    clearSession();
  };

  const contextValue = {
    //States
    user,
    token,
    isLoading,
    error,

    //Functions
    register,
    login,
    fetchProfile,
    logout,

    //Auth check
    isAuthenticated: !!token && !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{Children}</AuthContext.Provider>
  );
};
