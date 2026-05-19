import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { FaGamepad } from "react-icons/fa";

function DiscordActivities() {
  const { user } = useContext(Context);
  const [page, setPage] = useState(0);

  const activities = user?.status?.activities ?? [];

  useEffect(() => {
    if (page >= activities.length && activities.length > 0) {
      setPage(0);
    }
  }, [page, activities.length]);

  const activity = activities[page];

  if (!activity) return null;

  const handleNext = () => {
    setPage((prev) => (prev + 1) % activities.length);
  };

  const hasAssets = activity.assets && activity.applicationId;
  const hasFallbackIcon = !!activity.fallbackIconUrl;

  return (
    <div
      onClick={handleNext}
      className="w-full h-20 rounded-2xl text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {hasAssets ? (
          <img
            src={`https://cdn.discordapp.com/app-assets/${activity.applicationId}/${activity.assets.largeImage}.png?size=160`}
            alt={activity.name || "Discord activity"}
            className="h-10 w-10 rounded-sm object-cover"
          />
        ) : hasFallbackIcon ? (
          <img
            src={activity.fallbackIconUrl}
            alt={activity.name || "Discord activity"}
            className="h-10 w-10 rounded-sm object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-sm bg-white/10 flex items-center justify-center text-white/70">
            <FaGamepad size={24} />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold leading-none text-white">
            {activity.name}
          </p>
          <p className="text-sm text-gray-400">
            {activity.details || activity.state || "Oynanıyor"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscordActivities;
