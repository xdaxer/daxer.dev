import React from "react";

function PhotoGallery() {
  return (
    <div
      style={{
        backgroundImage: "url('/gallery/1.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-40 sm:h-46 rounded-2xl border border-white/10 bg-black/15"
    ></div>
  );
}

export default PhotoGallery;
