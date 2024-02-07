// Card.js
import React from 'react';

const Card = ({ data, onClick }:any) => {
  const { title, lin, phara, image, color1} = data;

  return (
    <div className='flex bg-gray-200 pt-3 ps-7 pe-1 pb-3 card-flex'>
      <div className='pe-3'>
        <h3 className='font-bold text-base title w-80'>{title}</h3>
        <a href='#' className={`text-sm lin ${color1}`}>
          {lin}
        </a>
        <p className='text-base text-black-200 phara font-thin mt-1.5'>{phara}</p>
      </div>
      <div>
        <img className='w-96 h-32 rounded pe-3 image' src={image} alt="Image "/>
        <div className='float-end me-4 text-blue-500 flex'>
          <p className='mt-1.5 cursor-pointer view pe-1' onClick={onClick}>
            View More
          </p>
          <div className='text-blue-500 mt-3 ms-1 view1'>
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#42A5F5" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </div>
        </div>
       
      </div>      
    </div>
  );
};

export default Card;
