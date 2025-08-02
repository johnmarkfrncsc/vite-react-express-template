import React from "react";
import { Link } from "react-router-dom";
import newProduct1 from "../assets/newArrivalItem/newProduct1.png";
import newProduct2 from "../assets/newArrivalItem/newProduct2.png";
import newProduct3 from "../assets/newArrivalItem/newProduct3.png";
import newProduct4 from "../assets/newArrivalItem/newProduct4.png";
import newProduct5 from "../assets/newArrivalItem/newProduct5.png";

const products = [
  {
    id: 1,
    name: "Fujihama Cordless Drill",
    description: "PROFESSIONAL TOOLS",
    img: newProduct1,
  },
  {
    id: 2,
    name: "Fujihama Vacuum Cleaner",
    description: "PROFESSIONAL TOOLS",
    img: newProduct2,
  },
  {
    id: 3,
    name: "Toyohama Silent Inverter Generator",
    description: "PROFESSIONAL TOOLS",
    img: newProduct3,
  },
  {
    id: 4,
    name: "Toyohama Grass Cutter",
    description: "PROFESSIONAL TOOLS",
    img: newProduct4,
  },
  {
    id: 5,
    name: "Kawasaki Power Sprayer Pressure Washer KC25A",
    description: "PROFESSIONAL TOOLS",
    img: newProduct5,
  },

];

const NewArrival = () => {
  return (
    <div className="py-5 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        New Arrival Item
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white border-2 border-green-300 text-neutral-600 p-2 flex justify-between items-start"
          >
            <div className="flex-1">
              <span className="block font-bold text-base mb-1">
                {product.name}
              </span>
              <p className="text-sm">{product.description}</p>
              <Link to="/menu">
                <button className="btn btn-xs md:btn-sm mt-2 bg-amber-300 text-black rounded-none border-0 shadow-none">
                  Learn More
                </button>
              </Link>
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-24 h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
