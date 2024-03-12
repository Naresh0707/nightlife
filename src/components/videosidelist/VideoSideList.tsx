"use client"
import React from "react";
import PostYourVideo from "./PostYourVideo";
import MonthlyCalendar from "../homesidelist/MonthlyCalendar";

export default function VideoSideList() {

  // const separateImageSrc = data.length > 0 ? data[0].img : "";
  return (
    <>
    <PostYourVideo />
    <MonthlyCalendar />
    </>
  );
}


