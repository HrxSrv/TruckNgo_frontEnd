import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:3400/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };
  const logout = async () =>{
  const res = await axios.post("http://localhost:3400/api/auth/logout",{
    withCredentials:true,
  });
  }
  const  updateUser= async () =>{
  const res = await axios.put("http://localhost:3400/api/user/updateUser",{
    withCredentials:true,
  });
  }
    useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login,logout, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};
