import React from "react";
import Image from "next/image";
import { data } from "../common/data/LatestMusicRelease.json";

export default function LatestMusicRelease() {

  const separateImageSrc = data.length > 0 ? data[0].img : "";
  return (
    <div className="mt-3 LatestMusicRelease">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">  
          <div className="ms-2 mt-1">
            <h1 className="text-green-800 font-bold text">
              Latest Music <span className="violet1">Releases</span>
            </h1>
            <hr className="w-[85px] h-1 bg-blue-900" />
          </div>
          <div className=" mt-1 me-4 text-sm">
            <a href="#" className="text-blue-500">
              {" "}
              View All 
            </a>
          </div>
        </div>

        {data.map((a, index) => (
          <div key={index} className=" bg-white border border-gray-200 rounded-lg shadow m-5" >
            <a href="#">
              <img className="rounded-t-lg" src={a.imageSrc} alt="" />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {a.caption}
                </h5>
              </a>
            </div>
          </div>
        ))}
       
      </div>
      <div className="mt-5 ms-2">
          <img className="" src={separateImageSrc} />
        </div>
    </div>
  );
}

