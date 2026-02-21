import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [token, setTokenState] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://vu4ll.com.tr/api/daxer")
        .then((response) => {
          setUser(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 20000);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
