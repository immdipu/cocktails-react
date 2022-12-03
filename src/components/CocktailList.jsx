import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="mt-20">
        <Loading />
      </div>
    );
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="capitalize">No cocktails matched your search criteria </h2>
    );
  }

  return (
    <section className="mt-14">
      <h1 className="text-3xl tracking-[8px] font-bold text-zinc-700 text-center">
        Cocktails
      </h1>
      <div className="grid gap-x-7 grid-cols-[repeat(auto-fill,minmax(338.8px,1fr))] justify-center items-center mx-24 mt-10 gap-y-14 mb-24">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
