import React from "react";
import newProduct1 from "../assets/newArrivalItem/newProduct1.png";
import newProduct2 from "../assets/newArrivalItem/newProduct2.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <>
      <div className="py-5 mx-2 ">

        <h1>New Arrival Item</h1>

        <div className="flex flex-col md:flex-row  gap-2">

          <div className="text-neutral-400 py-2 flex justify-between px-3 border-2 border-green-300 md:w-1/2">
            <div className="mt-2">
              <span className="font-bold">Fujihama Cordless Drill</span>
              <p>PROFFESIONAL TOOLS</p>
              <Link to="/menu">
                <button className="btn btn-xs border-0 shadow-none rounded-none w-auto mt-1 md:btn-sm  bg-amber-300 text-black ">
                  Learn More
                </button>
              </Link>
            </div>
            <img
              src={newProduct1}
              alt="article-GrassCutter"
              className="w-30 h-28 md:w-auto"
            />
          </div>

          <div className="text-neutral-400 py-2 flex justify-between px-3  border-2 border-green-300 md:w-1/2">
            <div>
              <span className="font-bold">Fujihama Vacuum Cleaner</span>
              <p>PROFFESIONAL TOOLS</p>
              <Link to="/menu">
                <button className="btn btn-xs border-0 shadow-none rounded-none w-auto mt-1 md:btn-sm   bg-amber-300 text-black ">
                  Learn More
                </button>
              </Link>
            </div>
            <img
              src={newProduct2}
              alt="article-GrassCutter"
              className="w-24 h-28 md:w-auto"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default NewArrival;
