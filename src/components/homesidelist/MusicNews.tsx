import React from "react";
import { data } from "../common/data/MusicNews.json";

export default function MusicNews() {
  return (
    <div className="mt-3 musicnews">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-100 musicnews">
        <div className="flex justify-between">
          <div className="ms-2 mt-1">
            <h1 className="text-green-800 font-bold">
              Music <span className="violet1">News</span>
            </h1>
            <hr className="w-[45px] h-1 bg-blue-900" />
          </div>
          <div className=" mt-1 me-4 text-sm">
            <a href="#" className="text-blue-500">
              {" "}
              View All
            </a>
          </div>
        </div>

        {data.map((a, index) => (
          <div key={index} className="relative bg-black bg-opacity-70 border border-gray-200 rounded-lg shadow m-5 ">
            <a href="#" className="block relative ">
              <img className="rounded-t-lg bg-black bg-opacity-70 h-40 rounded-lg" src={a.imageSrc} alt="" />
              <div className="absolute bottom-0 left-0 right-0 p-2 top-0 text-overlay rounded-lg bg-black bg-opacity-25">
                <div className="absolute bottom-0 pb-1">
                <p className="tracking-tight font-bold  text-white dark:text-white w-[279px] text-lg caption">
                  {a.caption}
                </p>
                <p className="tracking-tight text-gray-300 dark:text-white">
                  {a.caption1}
                </p>
                </div>
                
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
