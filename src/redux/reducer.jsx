const initialState = {
  product: JSON.parse(localStorage.getItem("create")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  search: JSON.parse(localStorage.getItem("search")) || "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      const newProduct = action.payload;
      const updatedProductList = [...state.product, newProduct];
      localStorage.setItem("create", JSON.stringify(updatedProductList));

      return { ...state, product: updatedProductList };
    case "BASKET_PRODUCT":
      let findBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (findBasket) {
        let changeBasket = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        localStorage.setItem("basket", JSON.stringify(changeBasket));
        return {
          ...state,
          basket: changeBasket,
        };
      } else {
        localStorage.setItem(
          "basket",
          JSON.stringify([...state.basket, action.payload])
        );
        return { ...state, basket: [...state.basket, action.payload] };
      }
    case "DELETE_BASKET":
      const filterBasket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("basket", JSON.stringify(filterBasket));
      return { ...state, basket: filterBasket };
    case "ADD_FAVORITE":
      let findFavorite = state.favorite.find(
        (item) => item.id === action.payload.id
      );
      if (findFavorite) {
        console.log("bar");
      } else {
        localStorage.setItem(
          "favorite",
          JSON.stringify([...state.favorite, action.payload])
        );
        return { ...state, favorite: [...state.favorite, action.payload] };
      }
    case "DELETE_FAVORITE":
      const filterFavorite = state.favorite.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(filterFavorite));
      return { ...state, favorite: filterFavorite };
    case "SEARCH_PRODUCT":
      const searchProduct = state.product.filter((el) =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      localStorage.setItem("search", JSON.stringify(searchProduct));
      return { ...state, search: searchProduct };
    case "MINUS_BASKET":
      let minusBas = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(minusBas));
      return { ...state, basket: minusBas };
    default:
      return state;
  }
};
