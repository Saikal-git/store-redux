import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s);
  const [data, setData] = useState(null);

  function sortProduct() {
    const sortedProducts = product.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setData(sortedProducts);
  }

  console.log(data);
  useEffect(() => {
    sortProduct();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-start flex-wrap gap-[100px] my-[50px]">
          {data?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
