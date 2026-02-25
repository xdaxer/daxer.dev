import React from "react";
import Profile from "../../components/home/profile";
import Clock from "../../components/home/clock";
import DiscordStatus from "../../components/home/discordStatus";
import SpotifyStatus from "../../components/home/spotifyStatus";
import DicordActivities from "../../components/home/dicordActivities";
import PhotoGallery from "../../components/home/photoGallery";
import Skills from "../../components/home/skills";
import Projects from "../../components/home/projects";
import QuickLinks from "../../components/home/quickLinks";
import Contact from "../../components/home/contact";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center scale-110 blur-xl opacity-95" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-4 p-6 lg:p-10">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <Profile />
          <DiscordStatus />
          <DicordActivities />
                    <SpotifyStatus/>
           
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <Clock />
          <Skills />
          <Contact />
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <Projects />
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
