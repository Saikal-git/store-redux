import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s);
  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-start flex-wrap gap-14 my-[50px]">
          {search?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
