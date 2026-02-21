import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
function DiscordStatus() {
  const { user } = useContext(Context);
  const statusColors = {
    online: "bg-[#45A366]",
    idle: "bg-[#FCA81A]",
    dnd: "bg-[#F23F43]",
    offline: "bg-[#84858D]",
  };

  const status = user?.status?.status;

  return (
    <div className="w-full h-20 rounded-2xl flex gap-4 items-center text-black p-5 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] ">
      <div className="w-12 h-12 relative">
        <img src={user.avatar} alt="avatar" className=" rounded-full border" />
        <div
          className={`${
            statusColors[status] || "bg-gray-500"
          } border w-3 h-3 rounded-full absolute right-0 top-9`}
        ></div>
      </div>

      <div className="flex flex-col gap-1">
        <p>xDaxer</p>
      </div>
    </div>
  );
}

export default DiscordStatus;
