import React from "react";
import Cards from "./Cards";

const ListCard = ({ filterDate, setFilterDate }) => {
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 items-start">
      {filterDate &&
        filterDate.map((items, index) => {
          return (
            <Cards
              {...items}
              key={index}
              currentIndex={index}
              setFilterDate={setFilterDate}
            />
          );
        })}
    </div>
  );
};

export default ListCard;
