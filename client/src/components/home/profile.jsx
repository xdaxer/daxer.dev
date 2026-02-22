import React, { useContext } from "react";
import { Context } from "../../context/context";
import { FaDiscord, FaGithub } from "react-icons/fa6";

function Profile() {
  const { user } = useContext(Context);

  return (
    <div className="w-full h-65 p-2  rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/20  flex flex-col items-center justify-center gap-3 ">
      <img
        src={user.avatar}
        alt="Profile avatar"
        className="h-24 w-24 rounded-2xl object-cover border border-white/10 shadow-md shadow-black/20"
      />

      <div className="text-center space-y-1">
        <p className="text-2xl font-semibold leading-none">Daxer</p>
        <p className="text-sm text-white/70 leading-relaxed max-w-xs">
          The right man in the wrong place can make all the difference in the
          world
        </p>
      </div>

      <div className="flex gap-2 pt-1">
        <a
          href="https://discord.com/users/1001904239058100265"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10 hover:text-white"
            aria-label="Discord"
          >
            <FaDiscord className="text-lg" />
          </button>
        </a>

        <a
          href="https://github.com/xdaxer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
