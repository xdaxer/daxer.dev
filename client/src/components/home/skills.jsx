import React from "react";

function Skills() {
  const icons = [
    "javascript",
    "react",
    "nodejs",
    "tailwind",
    "mongodb",
    "express",
    "github",
    "figma",
    "linux",
    "cloudflare",
    "vscode",
  ];

  return (
    <div className="w-full h-50 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl shadow-black/20">
      <p className="mb-3 text-lg font-semibold text-white">Skills & Tools</p>

      <div className="flex flex-wrap gap-2">
        {icons.map((icon) => (
          <div
            key={icon}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            <img src={`/icons/${icon}.svg`} alt={icon} className="h-7 w-7" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
