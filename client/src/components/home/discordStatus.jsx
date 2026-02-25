import React, { useContext } from "react";
import { Context } from "../../context/context";

function DiscordStatus() {
  const { user } = useContext(Context);

  const statusColors = {
    online: "bg-[#45A366]",
    idle: "bg-[#FCA81A]",
    dnd: "bg-[#F23F43]",
    offline: "bg-[#84858D]",
  };

  const statusLabels = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline",
  };

  const status = user?.status?.status || "offline";

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://discord.com/users/1001904239058100265"
      className="relative w-full h-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/20"
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: 'url("/nameplate.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center gap-3 px-5 text-white">
        <div className="relative h-12 w-12 shrink-0">
          <img
            src={user.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full object-cover border border-white/10"
          />
          <span
            className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#111827] ${
              statusColors[status] || "bg-gray-500"
            }`}
          />
        </div>

        <div className="min-w-0">
          <p className="text-base font-semibold leading-none text-white">
            {user?.username || "xDaxer"}
          </p>
          <p className="mt-1 text-xs text-white/70">
            {statusLabels[status] || "Offline"}
          </p>
        </div>
      </div>

      <img
        src="/icons/discord.svg"
        alt="spotifyIcon"
        className="h-4 absolute top-2 right-2"
      />
    </a>
  );
}

export default DiscordStatus;
