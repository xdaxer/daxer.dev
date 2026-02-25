import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaSteam,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/1001904239058100265",
    icon: <FaDiscord color="#ffffff" size={18} />,
  },
  {
    name: "Github",
    url: "https://github.com/xdaxer",
    icon: <FaGithub color="#ffffff" size={18} />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/abdullahyirik",
    icon: <FaLinkedinIn color="#ffffff" size={18} />,
  },

  {
    name: "Email",
    url: "mailto:contact@daxer.dev",
    icon: <IoIosMail color="#ffffff" size={18} />,
  },
  {
    name: "X",
    url: "https://x.com/xdaxerr",
    icon: <FaTwitter color="#ffffff" size={18} />,
  },
  {
    name: "Steam",
    url: "https://steamcommunity.com/id/xdaxer",
    icon: <FaSteam color="#ffffff" size={18} />,
  },
];

function Contact() {
  return (
    <div className="w-full flex flex-col gap-1 h-78 overflow-y-scroll contact-scroll rounded-2xl  text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <p className=" text-lg font-semibold text-white">Contact</p>
      {socials.map((social) => (
        <a
          key={social.name}
          rel="noopener noreferrer"
          href={social.url}
          className=" min-h-15 rounded-md bg-white/5 hover:bg-white/10 flex items-center px-3 gap-3"
        >
          <div className="flex items-center bg-white/9 p-2 rounded-md">
            {social.icon}
          </div>
          <p className="text-white">{social.name}</p>
        </a>
      ))}
    </div>
  );
}

export default Contact;
