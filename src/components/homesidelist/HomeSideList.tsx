"use client"

import React from "react";
import LatestMusicRelease from "../homesidelist/LatestMusicRelease";
import MusicNews from "./MusicNews";
import MusicVideos from "./MusicVideos";
import MonthlyCalendar from "./MonthlyCalendar";

export default function HomeSideList() {
  return (
    <>
    
    <LatestMusicRelease />
    
    
      <MusicNews />
    
    
      <MusicVideos /> 
    
      <MonthlyCalendar />
    
      
    </>
  );
}
