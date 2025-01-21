import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute top-0 text-white bg-gradient-to-r from-black to-transparent">
      <div className="ml-16 flex items-start justify-center h-full flex-col">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className="px-6 py-1 text-lg rounded-md bg-white text-black border-2 hover:opacity-80">
            Play
          </button>
          <button className="ml-3 px-4 py-1 text-lg rounded-md bg-black text-white border-2 hover:opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
