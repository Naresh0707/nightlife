// import React from 'react';
// import VerticalAd from '../advertise/Addurl';

// const RightSideAdd = () => {
//   const imageUrl = 'https://example.com/your-image.jpg' ; 

//   return (
//     <div>
//       <VerticalAd />
//     </div>
//   );
// };

// export default RightSideAdd;


// const RightSideAdd = ({ iframeSrc }:any) => {
//     return (
//       <iframe
//         src={iframeSrc}
//         width="200"
//         height="600"
//         frameBorder="0"
//         scrolling="no"
//         title="Vertical Advertisement"
//       ></iframe>
//     );
//   };
  
//   export default RightSideAdd;


import React from 'react';
// import VerticalAd from '../advertise/Addurl';


// const RightSideAdd = () => {
//   // Replace 'your-advertisement-url' with the actual URL or HTML content
//   const iframeSrc = 'https://example.com/your-advertisement-url';

//   return (
//     <div>
//       <VerticalAd iframeSrc={iframeSrc} />
//     </div>
//   );
// };

// export default RightSideAdd;


const RightSideAdd = () => {
  return (
    <div className="vertical-ad">
      <iframe
        src="https://your-advertisement-url.com"
        width="150"  // Set the width according to your design
        height="600" // Set the height according to your design
        frameBorder="0"
        scrolling="no"
        title="Vertical Advertisement"
      ></iframe>
    </div>
  );
};

export default RightSideAdd;

