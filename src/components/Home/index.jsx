import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s);
  console.log(product, "pro");

  const messageError = (str) =>
    toast.error(str, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const addProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      messageError("заполните пустые поля!");
    } else {
      let newProduct = {
        quantity: 1,
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productUrl,
        name: productName,
        price: productPrice,
      };
      dispatch({ type: "CREATE_PRODUCT", payload: newProduct });
      setProductUrl("");
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div className="my-[40px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col w-[50%] mx-auto gap-5">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Url
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addProduct();
                }
              }}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <button
            onClick={() => addProduct()}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Product
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
