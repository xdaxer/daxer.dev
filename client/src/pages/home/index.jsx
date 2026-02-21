import React from "react";
import Profile from "../../components/home/profile";
import Clock from "../../components/home/clock";
import DiscordStatus from "../../components/home/discordStatus";
import SpotifyStatus from "../../components/home/spotifyActivities";
import PhotoGallery from "../../components/home/photoGallery";
import Skilss from "../../components/home/skills";
import Projects from "../../components/home/projects";
import QuickLinks from "../../components/home/quickLinks";
import Contact from "../../components/home/contact";

function HomePage() {
  return (
    <>
      <div className="absolute -inset-5 bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat blur-[18px] w-full h-full"></div>
      <div className="flex w-300 h-full p-10  m-auto  gap-3">
        <div className="flex flex-col gap-3 w-full">
          <Profile />
          <DiscordStatus />
          <SpotifyStatus />
          <PhotoGallery />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Clock />
          <Skilss />
          <Projects />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <QuickLinks />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default HomePage;
