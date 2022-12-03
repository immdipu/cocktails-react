import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const [inputValue, setinputValue] = useState("");
  const InputHandle = (e) => {
    setinputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <section className="flex flex-col justify-center mt-10">
      <div className="border border-3 flex flex-col bg-white max-w-[40rem] w-screen m-auto px-9 gap-5 py-7 shadow-lg focus-within:shadow-2xl transition-all duration-300 focus-within:scale-[1.001] rounded-md">
        <label
          htmlFor="input"
          className="capitalize tracking-widest font-medium  text-[#23761d]"
        >
          Search your favorite cocktial
        </label>
        <input
          type="text"
          className="bg-[#f1f5f8] outline-none transition-all focus:border-gray-500 focus-within:border-2  rounded-md h-10 text-xl px-4"
          placeholder="Search.."
          value={inputValue}
          onChange={InputHandle}
        />
      </div>
    </section>
  );
};

export default SearchForm;
