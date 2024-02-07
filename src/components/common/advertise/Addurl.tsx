// import Image from 'next/image';

// const VerticalAd = () => {
//   return (
//     <div style={{ position: 'relative', width: '200px', height: '485px' }}>
//       <Image
//         src="https://www.example.com/your-advertisement-image.jpg" // Replace with the actual image URL
//         alt="Advertisement"
//         layout="fill"
//         objectFit="cover"
//       />
//       <iframe className=''
//         src="https://www.example.com/your-advertisement"
//         style={{ position: 'absolute', top: 0, left: 0, bottom:0, width: '100%', height: '100%' }}
//         // frameBorder="0"
//         height="500"
//         width="300"
//         scrolling="yes"
//       ></iframe>
//     </div>
//   );
// };

// export default VerticalAd;

import React from 'react';

const VerticalAd = ({ iframeSrc }: any) => {
  // Basic check to ensure iframeSrc is provided
  if (!iframeSrc) {
    console.error("Error: 'iframeSrc' prop is missing.");
    return null;
  }

  return (
    <iframe
      src={iframeSrc}
      width="200"
      height="550"
      frameBorder="0"
      scrolling="no"
      title="Vertical Advertisement"
      // Add any additional attributes or styles if needed
    >

      
    </iframe>
  );
};

export default VerticalAd;

