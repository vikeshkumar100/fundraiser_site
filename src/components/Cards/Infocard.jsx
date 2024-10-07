import React from 'react';

const Infocard = ({ image, title, content }) => {
  return (
    <>
      <div className="w-[90vw] md:w-[25vw] flex flex-col items-center mx-auto gap-3 p-6 hover:bg-green-100 rounded-xl">
        <div className="w-[120px] h-[120px] overflow-hidden rounded-full">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='font-bold'>{title}</div>
        <div className='font-semibold text-center'>{content}</div>
      </div>
    </>
  );
};

export default Infocard;
