"use client"
import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import datas from "../common/data/PhotoGallery.json";

if (typeof window !== "undefined" && !window.$) {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [carouselItems, setCarouselItems] = useState(datas);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const options = {
    loop: true,
    // autoplay: false,
    nav: false,
    smartSpeed: 3,
    dots: false,
    responsive: {
      0: {
        items: 1, // Small screens
        autoplay: true, 
      },
      768: {
        items: 3, // Larger screens
        autoplay: false, 
      },
      },
  };

  return (
    <div className="shadow bg-gray-200 relative rounded">
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center">
           <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl handlePrev" >
             {"<"}
           </button>
           <button onClick={handleNext}  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl handleNext" >
             {">"}
          </button>
           <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-2xl show" >
             &times;
           </button>
          <div className="image-container">
             <img src={carouselItems[activeIndex]?.imageSrc} alt={carouselItems[activeIndex]?.altText} className="rounded relative" width={800}  height={600}>
                
                 </img>
             <div className="overlay-text opacity-1 absolute order1 bg-black bg-opacity-70 p-4 rounded">
               <p className="text-white text-lg day-position1">On the Special day</p>
             </div>
           </div>
        </div>
      )}

      <div className="rounded">
        <div className="flex justify-between">
          <div className="ms-2 mt-1">
            <h1 className="text-green-800">
              Photo <span className="violet1">Gallery</span>
            </h1>
            <hr className="w-10 h-1 bg-blue-950" />
          </div>
          <div className=" mt-1 me-4 text-sm">
            <a href="#" className="text-blue-500">
              {" "}
              View All   {" > "}
            </a>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme pt-5 ps-5 rounded shadow"
          {...options}
        >
          {carouselItems.map((item, index) => (
            <div className="item" key={index}>
              <button onClick={() => handleImageClick(index)}>
              <div className="pe-5 pb-5" style={{ display: "flex", flexDirection: "row", alignItems: "center", }} >
                   <div className="bottom-0">
                     <img src={item.imageSrc} alt={item.altText} className="rounded photo " style={{ height: "150px", width: "500px" }} />
                     <div className="overlay-text absolute left-0 bottom-0 right-0 order bg-black bg-opacity-70 p-4 rounded position1" style={{ height: "10px", width: "228px" ,bottom:"19px"}} >
                       <p className="text-white text-sm  day-position" >On the Special day</p>
                     </div>
                   </div>
                 </div>
              </button>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
