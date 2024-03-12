"use client"

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { data } from "../common/data/MusicVideos.json";

const MusicVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const playerRef = useRef(null);

  const openFullScreen = (video) => {
    setSelectedVideo(video);
    setIsFullScreen(true);
    document.body.style.overflow = "hidden"; 
  };

  const closeFullScreen = () => {
    setSelectedVideo(null);
    setIsFullScreen(false);
    document.body.style.overflow = ""; 
  };


  const seekBackward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 10, "seconds");
    }
  };

  const seekForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 10, "seconds");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFullScreen) {
        closeFullScreen();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullScreen]);

  return (
    <div className="music-videos">
      <div className="max-width-container">
        {data.map((video, index) => (
          <div key={index} className="music-video-container">
            <div
              className="video-thumbnail"
              onClick={() => openFullScreen(video)}
            >
              <ReactPlayer
                ref={playerRef}
                url={video.videoSrc}
                controls={false}
                width="100%"
                height="100%"
                onPause={closeFullScreen}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1, controls: 0 },
                  },
                }}
              />
              <div className="overlay-container">
                <div className="caption-container">
                  <p className="tracking-tight text-gray-200 text-sm caption-container">
                    {video.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFullScreen && selectedVideo && (
        <div className="full-screen-modal">
          <button
            onClick={seekBackward}
            className="absolute top-52 left-4 text-white text-2xl"
          >
            &lt;&lt; {/* Backward icon */}
          </button>
          <button
            onClick={closeFullScreen}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl"
          >
            &times; {/* Close icon */}
          </button>
          <button
            onClick={seekForward}
            className="absolute top-52 right-4 text-white text-2xl"
          >
            &gt;&gt; {/* Forward icon */}
          </button>
 
          <ReactPlayer
            ref={playerRef}
            url={selectedVideo.videoSrc}
            controls={true}
            width="100vw"
            height="100vh"
            onEnded={closeFullScreen}
          />
        </div>
      )}
    </div>
  );
};

export default MusicVideos;
