import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();
const API = axios.create({
  baseURL: "http://localhost:3000",

})
export const Provider = ({ children }) => {
  const [token, setTokenState] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      API
        .get("/me")
        .then((response) => {
          setUser(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        token,
        setTokenState,
        user,
        setUser,
        isloading,
        API 
      }}
    >
      {children}
    </Context.Provider>
  );
};
