import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col gap-7 my-[40px]">
          {favorite.map((el) => (
            <a
              href="#"
              class="flex flex-col items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={el.url}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  {el.price} сом
                </span>
                <a
                  onClick={() =>
                    dispatch({ type: "DELETE_FAVORITE", payload: el })
                  }
                  className="text-[30px] absolute bottom-[20px] right-[20px]"
                >
                  <RiDeleteBinLine />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
