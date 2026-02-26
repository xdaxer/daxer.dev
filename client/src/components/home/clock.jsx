import React, { useState, useEffect } from "react";
import { GoClockFill } from "react-icons/go";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-25 rounded-2xl text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]   flex flex-col items-center justify-center text-white">
      <p
        className="text-3xl font-semibold tracking-wide leading-none"
        style={{ fontFamily: "Domine" }}
      >
        {time.toLocaleTimeString("tr-TR", {
          timeZone: "Europe/Istanbul",
        })}
      </p>

      <div className="mt-2 flex items-center gap-1 text-sm text-white/60">
        <GoClockFill className="text-white/50" />
        <span>Istanbul</span>
      </div>
    </div>
  );
}

export default Clock;
