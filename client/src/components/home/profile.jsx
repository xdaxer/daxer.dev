import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
function Profile() {
  const { user } = useContext(Context);
  console.log(user.avatar);

  return (
    <div className="w-full h-60 rounded-2xl  border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]  p-5 justify-center flex items-center flex-col gap-1">
      <img src={user.avatar} alt="" className="w-30 rounded-xl" />
      <p className="">Daxer</p>
      <p className="text-center text-base text-[#cbcbcb] text-[14px]">
        The right man in the wrong place can make all the difference in the
        world
      </p>
    </div>
  );
}

export default Profile;
