import React, { useState } from "react";
import ListCard from "../card/ListCard";
import Carddata from "../card/data";
const Tours = () => {
  const [filterDate, setFilterDate] = useState(Carddata);
  const refreshAll = () => {
    setFilterDate(Carddata);
  };
  const length = filterDate.length;
  return (
    <>
      <div className=" md:p-35 p-20 bg-slate-100 w-full h-fit flex flex-col items-center gap-5">
        <div className=" flex flex-col w-fit gap-1">
          {filterDate.length > 0 ? (
            <p className=" text-3xl font-medium">Our Tours</p>
          ) : (
            <p className=" text-3xl font-medium">No Tours Left</p>
          )}
          <div className=" w-20 h-1 bg-emerald-500 rounded-full self-center"></div>
        </div>
        <div>
          {filterDate.length <= 0 ? (
            <button
              className="bg-emerald-500 py-1  px-5 rounded text-white font-semibold text-xl"
              onClick={refreshAll}
            >
              Refresh
            </button>
          ) : (
            <ListCard filterDate={filterDate} setFilterDate={setFilterDate} />
          )}
        </div>
      </div>
    </>
  );
};

export default Tours;
