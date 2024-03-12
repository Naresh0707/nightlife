"use client"
import React, { useState } from "react";
import ocean from "../../../public/images/Screenshot 2024-01-13 111232.png";
import sea from "../../../public/images/Screenshot 2024-01-13 111257.png";
import woman from "../../../public/images/Screenshot 2024-01-13 111341.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

if (typeof window !== "undefined" && !window.$) {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const carouselItems = [
  {
    imageSrc: ocean.src,
    altText: "Ocean",
    caption: "55th ACM Awards to Broadcost live from Live Nashvile",
    caption1:
      "The Academy Country music@ Annunced that 55th ACADEMY of COUNTRY MUSIC AWARDS, will take a place of nashvile Country Music@ will take a place of nashvile",
  },
  {
    imageSrc: sea.src,
    altText: "Sea",
    caption: "Exlusive Europian Road show:The chiron pur sport currently",
    caption1:
      "The Academy Country music@ Annunced that 55th ACADEMY of COUNTRY MUSIC AWARDS, will take a place of nashvile MUSIC AWARDS, will take a place of nashvile",
  },
  {
    imageSrc: woman.src,
    altText: "Woman",
    caption: "Lamborghini unveil new motor yatch Technomar  for Lamborghini",
    caption1:
      "TN for the first tim,Academy of the Country music @ annunced that the 55TH, of the Country Music@ will take a place of nashvile f nashvile MUSIC AWARDS, will take a place of nashvile",
  },
];

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
  nav: false,
  smartSpeed: 3, // Very fast transition
  // onTranslate: onTranslate,
  // onTranslated: onTranslated
};

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex: any) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="shadow bg-gray-200 relative rounded  border border-1 border-gray-300">
      <div className="absolute mt-[8px] left-0 trending">
        <a
          href="#"
          className="rounded-br-lg border border-1 text-lg border-gray-300 rounded-tl right-0 text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 dark:bg-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-35"
        >
          Trending News{" "}
        </a>

        <div className="mt-[45px]">
          <button onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" className="top-0 ms-5 owl-nav owl-next" height="16" width="25" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
          </button>
        </div>
      </div>
      <OwlCarousel className="owl-theme pt-10 ps-12" {...options}>
        {carouselItems.map((item, index) => (
          <div className="item" key={index}>
            <div className="pe-5 media-flex" >
              <div className="ms-5 pe-5 font-bold">
                <div className="font-bold owl-head ">
                  <p>{item.caption}</p>
                </div>
                <div className="font-light sm:text-sm owl-text mt-1">
                  <p>{item.caption1}</p>
                </div>
              </div>
              <div>
                <img
                  src={item.imageSrc}
                  className="rounded mt-2"
                  alt={item.altText}
                  style={{ height: "150px", width: "650px" }}
                />
                <div className="float-end me- text-blue-500 flex">
                  <p className="mt-1.5 cursor-pointer pe-1">View More</p>
                  <div className=" mt-3 ms-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#42A5F5" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
