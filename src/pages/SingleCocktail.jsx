import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [singleCocktail, setSingleCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    const CocktailDetails = async () => {
      const res = await axios.get(`${url}${id}`);
      let datas = res.data;
      if (datas.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = datas.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setSingleCocktail(newCocktail);
      } else {
        setSingleCocktail(null);
      }
      setLoading(false);
    };

    CocktailDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-[9rem]">
        <Loading />
      </div>
    );
  }

  if (!singleCocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      singleCocktail;
    return (
      <div>
        <div className="w-fit m-auto mt-16 scale-[1.2]">
          <Link to="/">
            <button className="bg-[#2e702a] text-neutral-100 tracking-[4px] uppercase font-thin px-2 text-sm py-1 rounded-sm mt-2 hover:bg-[#31922c] hover:text-black transition-all duration-300 ease-linear">
              Back Home
            </button>
          </Link>
        </div>
        <section className="my-20 mx-20 flex gap-14 max-lg:flex-col">
          <div className="w-[50%]">
            <img
              src={image}
              alt={name}
              className="h-full object-contain w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-widest">{name}</h2>
            <div className="flex gap-4 items-center">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md ">
                Name :
              </p>
              <p className="text-xl font-medium">{name}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md ">
                Category :
              </p>
              <p className="text-xl font-medium">{category}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md ">
                Info :
              </p>
              <p className="text-xl font-medium">{info}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md ">
                Glass :
              </p>
              <p className="text-xl font-medium">{glass}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md whitespace-nowrap text-center ">
                Instructions :
              </p>
              <p className="text-xl font-medium">{instructions}</p>
            </div>
            <div className="flex gap-4 items-center flex-wrap">
              <p className="bg-[#d4e6a5] text-[#476a2e] font-medium w-fit px-3 pb-1 text-xl rounded-md whitespace-nowrap text-center">
                ingredients :
              </p>
              {ingredients.map((item, i) => {
                return (
                  <p
                    className="text-xl font-medium
                  "
                    key={i}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default SingleCocktail;
