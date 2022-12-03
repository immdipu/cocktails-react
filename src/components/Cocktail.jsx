import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className="drink_card bg-white shadow-md hover:shadow-2xl transition-all duration-300 ease-linear rounded-md">
      <img
        src={image}
        alt={name}
        className="object-cover h-80 rounded-md w-full"
      />
      <div className="px-4 py-3">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-[5px]">
          {name}
        </h1>
        <h5 className="tracking-[6px] font-semibold text-xl my-1">{glass}</h5>
        <p className="text-lg text-neutral-400 font-light">{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="bg-[#2e702a] text-neutral-100 tracking-[4px] uppercase font-thin px-2 text-sm py-1 rounded-md mt-2 hover:bg-[#31922c] hover:text-black transition-all duration-300 ease-linear">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
