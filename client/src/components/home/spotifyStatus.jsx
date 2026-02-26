import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context/context";

function SpotifyStatus() {
  const { API } = useContext(Context);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotify = () => {
      API.get("/me/spotify")
        .then((response) => {
          setData(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 10000);
    return () => clearInterval(interval);
  }, [API]);


  if(!data){
    return (
      <div className="relative w-full h-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/20 flex items-center px-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
          <p className="text-sm font-medium text-white/50">Not playing anything</p>
        </div>
      </div>
      
    );
    
  }


   let artists = data.music.artists.map((artist) => artist).join(", ");

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={data.music.spotifyUrl}
      className="w-full flex gap-3 h-20 rounded-2xl items-center relative text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
    >
      <img
        src={data.music.image[2].url}
        alt="Album Image"
        className="rounded-sm w-10 h-10"
      />
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold leading-none text-white">
          {data.music.name}
        </p>
        <p className="text-sm text-gray-400">{artists}</p>
      </div>

      <img
        src="/icons/spotify.svg"
        alt="spotifyIcon"
        className="h-4 absolute top-2 right-2"
      />
    </a>
  );
}

export default SpotifyStatus;
