// import Image from "../../../../public/images/grahame-jenkins-p7tai9P7H-s-unsplash.jpg";
// export default function Main_add() {
//   return (
//     <section className=" add">
//       <div className=" w-[90%]">
//         <div className=" flex bg-black row-1 gap-2  rounded ">
//           <div className=" w-full">
//             <img src={Image.src} className="rounded h-[160px]  w-full min-w" />
//           </div>
//           <div className="ms-4 w-full max-h1">
//             <h1 className="text-white w-full text-3xl add_font main-head">Iconic luxury. Unmissable benefits.</h1>
//             <h4  className="text-white mt-1 font-bold main-head1">Bring home the mercedes-Benz-S-class with grand benifits</h4>
//             <p className="text-gray-200 mt-1 text-xs w-4/5">
//               Drive home the iconic Mercedes-Benz S-Class and indulge in the best of luxury with limitted
//               time ownership packages
//             </p>
//             <hr className="w-[320px] mt-1 "></hr>
//             <span className="text-blue-500 text-sm "><a href="#">Assured Buy-black <span className="text-white">+</span> Complimentry 4th Year Extend <br></br> Warranty <span className="text-white">+</span> 2 Year Complimentry Service Package</a></span>
//           </div>
// {/* 
//           <div className="iframe-container">
//             <iframe
//               src="https://www.youtube.com/embed/your-video-id"
//               width="600"
//               height="200"
//               frameBorder="0"
//               allowFullScreen
//               title="Embedded Video"
//             ></iframe>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


// export default function Main_add() {
//   const onlineImage = "https://example.com/your-online-image.jpg";

//   return (
//     <section className=" add">
//       <div className=" w-[90%]">
//         <div className=" flex bg-black row-1 gap-2  rounded ">
//           <div className=" w-full">
//             <img src={onlineImage} className="rounded h-[160px] w-full min-w" alt="Ad" />
//           </div>
//           <div className="ms-4 w-full max-h1">
//             <h1 className="text-white w-full text-3xl add_font main-head">Iconic luxury. Unmissable benefits.</h1>
//             <h4  className="text-white mt-1 font-bold main-head1">Bring home the mercedes-Benz-S-class with grand benifits</h4>
//             <p className="text-gray-200 mt-1 text-xs w-4/5">
//               Drive home the iconic Mercedes-Benz S-Class and indulge in the best of luxury with limitted
//               time ownership packages
//             </p>
//             <hr className="w-[320px] mt-1 "></hr>
//             <span className="text-blue-500 text-sm "><a href="#">Assured Buy-black <span className="text-white">+</span> Complimentary 4th Year Extend <br></br> Warranty <span className="text-white">+</span> 2 Year Complimentary Service Package</a></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useState } from 'react';

// export default function Main_add() {
  
//   const [adContent, setAdContent] = useState({
//     imageUrl: "https://images3.alphacoders.com/115/115387.jpg", // Online image URL
//     headline: "Iconic luxury. Unmissable benefits.",
//     subHeadline: "Bring home the Mercedes-Benz-S-class with grand benefits",
//     description: "Drive home the iconic Mercedes-Benz S-Class and indulge in the best of luxury with limited time ownership packages.",
//     offerDetails: "Assured Buy-back + Complimentary 4th Year Extended Warranty + 2 Year Complimentary Service Package"
//   });

  
//   return (
//     <section className="add">
//       <div className="w-[90%]">
//         <div className="flex bg-black row-1 gap-2 rounded">
//           <div className="w-full">
//             <img src={adContent.imageUrl} alt="Ad Image" className="rounded h-[160px] w-full min-w" />
//           </div>
//           <div className="ms-4 w-full max-h1">
//             <h1 className="text-white w-full text-3xl add_font main-head">{adContent.headline}</h1>
//             <h4 className="text-white mt-1 font-bold main-head1">{adContent.subHeadline}</h4>
//             <p className="text-gray-200 mt-1 text-xs w-4/5">
//               {adContent.description}
//             </p>
//             <hr className="w-[320px] mt-1"></hr>
//             <span className="text-blue-500 text-sm">
//               <a href="#">{adContent.offerDetails}</a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect } from 'react';

// declare global {
//   interface Window {
//     adsbygoogle: any[];
//   }
// }


// const GoogleAds = ({ adSlot, adFormat = 'auto', style = { display: 'block' } }) => {
//   useEffect(() => {
//     if (window) {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }
//   }, []);

//   return (
//     <ins className="adsbygoogle"
//          style={style}
//          data-ad-client="ca-pub-9910230582193405"
//          data-ad-slot="5928912620"
//          data-ad-format={adFormat}
//          data-full-width-responsive="true"></ins>
//   );
// };

// export default GoogleAds;
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAds = ({ adSlot, adFormat = 'auto', style = { display: 'block' } }) => {
  useEffect(() => {
    // Ensure the script is only appended once
    if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9910230582193405"]')) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9910230582193405";
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        // Push the ad after the script is loaded
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error('Error loading ad: ', error);
        }
      };
    }
  }, []);

  // Cleanup ads to prevent duplicates upon component re-mount
  useEffect(() => {
    return () => {
      const adsbygoogle = window.adsbygoogle || [];
      if (adsbygoogle.length > 0) {
        adsbygoogle.pop();
      }
    };
  }, []);

  return (
    <ins className="adsbygoogle"
         style={style}
         data-ad-client="ca-pub-9910230582193405"
         data-ad-slot="5928912620"
         data-ad-format={adFormat}
         data-full-width-responsive="true"></ins>
  );
};

export default GoogleAds;

