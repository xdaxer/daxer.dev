import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";

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

  if (!activity?.assets) return null;

  const handleNext = () => {
    setPage((prev) => (prev + 1) % activities.length);
  };
  console.log(activities);

  return (
    <div
      onClick={handleNext}
      className="w-full h-20 rounded-2xl text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <img
          src={`https://cdn.discordapp.com/app-assets/${activity.applicationId}/${activity.assets.largeImage}.png?size=160`}
          alt={activity.name || "Discord activity"}
          className="h-10 rounded-sm"
        />

        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold leading-none text-white">
            {activity.name}
          </p>
          <p className="text-sm text-gray-400">
            {activity.details || "Detay yok"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscordActivities;
