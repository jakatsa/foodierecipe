import React, { useContext } from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { Recipeitem } from "../../components/Recipeitem";

export const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading .... one sec</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => {
          return <Recipeitem item={item} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            nothing to show ... search again
          </p>
        </div>
      )}
    </div>
  );
};
