"use client";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { data } from "@/components/common/data/VideoSideList.json";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure it's above other content
`;

const ExitButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1010; // Above the full-screen content
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function VideoSideList() {
  const separateImageSrc = data.length > 0 ? data[0].img : "";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setSelectedVideo(null);
    setIsFullScreen(false);
  };

  return (
    <div className="mt-2 LatestMusicRelease ">
      <div className="max-w-sm rounded-lg  dark:bg-gray-800 dark:border-gray-700"></div>
      <div className="mt-2 ms-2">
        <img className="" src={separateImageSrc} />
      </div>
      <div className="justify-center text-center mt-7 mb-7">
        <a
          href="#"
          className="bg-blue-600 text-white rounded-3xl p-3.5 ps-24 pe-24 w-full"
        >
          Post Your Videos
        </a>
      </div>

      <div className="max-w-sm bg-gray-100    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex  ">
          <div className="ms-3 mt-1">
            <h1 className="text-green-800 font-bold text">
              Latest <span className="violet1">Videos</span>
            </h1>
            <hr className="w-[45px] h-1 bg-blue-900" />
          </div>
        </div>

        {isFullScreen && selectedVideo && (
          <FullScreenWrapper>
            <ExitButton onClick={closeFullScreen}>Exit Full Screen</ExitButton>
            <ReactPlayer
              url={selectedVideo}
              playing={true}
              controls={true}
              width="90%"
              height="90%"
            />
          </FullScreenWrapper>
        )}

        {data.map((a, index) => (
          <div
            key={index}
            className="ms-3 hover-parent"
            onClick={() => openFullScreen(a.videoSrc)}
          >
            <div className="hover:bg-white rounded-lg">
              <div className="flex justify-center items-center mt-5">
                <div className="flex justify-between">
                  <ReactPlayer
                    url={a.videoSrc}
                    controls={true}
                    width="70%"
                    height="90px"
                    style={{ borderRadius: "10px" }} 
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1, controls: 1 },
                      },
                    }}
                  />
                  <div className="fs-1 ms-2 mt-1">
                    <p className="text-sm child-text">{a.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}