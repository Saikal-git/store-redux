import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();

  //   const delBasket = (el) => {
  //     const basket = JSON.parse(localStorage.getItem("basket")) || [];
  //     let filterBasket = basket.filter((item) => item.id !== el.id);
  //     localStorage.setItem("basket", JSON.stringify(filterBasket));
  //     dispatch({ type: "DELETE_BASKET", payload: filterBasket });
  //   };
  return (
    <div>
      <div className="container">
        <div className="my-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs   text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Img
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    <span className="">Action</span>
                  </th>
                </tr>
              </thead>
              {basket.map((el) => (
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-9 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={el.url} alt="" width={60} />
                    </th>
                    <td className="px-6 py-4 text-[20px] font-mono">
                      {el.name}
                    </td>
                    <td className="px-6 py-4 text-[20px] font-mono">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() =>
                            dispatch({ type: "MINUS_BASKET", payload: el })
                          }
                        >
                          -
                        </button>
                        <h1>{el.quantity}</h1>
                        <button
                          onClick={() =>
                            dispatch({ type: "BASKET_PRODUCT", payload: el })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[20px] font-mono">
                      {el.price * el.quantity} сом
                    </td>
                    <td className="px-6 py-4 text-[20px] font-mono text-right">
                      <td
                        onClick={() =>
                          dispatch({ type: "DELETE_BASKET", payload: el })
                        }
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </td>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
