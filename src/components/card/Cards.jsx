import React, { useState } from "react";
const Cards = ({
  image,
  price,
  trip,
  details,
  currentIndex,
  setFilterDate,
}) => {
  const [readmore, setReadmor] = useState(false);

  const handleClick = (currentIndex) => {
    setFilterDate((preVal) =>
      preVal.filter((items, index) => {
        return currentIndex !== index;
      })
    );
  };
  return (
    <div className="  rounded overflow-hidden shadow-lg ">
      <div className="w-full h-[400px]  relative ">
        <img src={image} alt="location" className="w-full h-full object-fill" />
        <div className=" px-2 py-1 bg-emerald-500 w-fit text-white absolute top-0 right-0">
          $ {price}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-5 bg-white">
        <div>
          <p className=" text-center text-2xl font-semibold">{trip}</p>
        </div>
        <div>
          <p className={`${!readmore && "line-clamp-5"}`}>{details}</p>
          <button
            className="text-emerald-500 "
            onClick={() => setReadmor(!readmore)}
          >
            {readmore ? "Show Less" : "Read More"}
          </button>
        </div>
        <button
          className=" border-2 rou border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white w-full rounded-sm"
          onClick={() => handleClick(currentIndex)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Cards;
