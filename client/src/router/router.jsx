import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home"
import { useContext } from "react";
import { Context } from "../context/context";

function Router() {
  const { isloading } = useContext(Context);

  if (isloading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
