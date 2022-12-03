import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex flex-col gap-12 justify-center items-center mt-16">
      <h1 className="capitalize text-2xl font-medium text-gray-800">
        Oops! it's a dead end
      </h1>
      <button className="bg-[#476a2e] text-gray-100  font-light px-3 py-1 tracking-widest rounded-md hover:bg-[#6d8f55]">
        <Link to="/">Go Back To Home</Link>
      </button>
    </section>
  );
};

export default Error;
