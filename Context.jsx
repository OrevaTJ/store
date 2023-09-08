import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from 'react';
import axios from 'axios';
import reducer from './src/components/Reducer';

const url = 'https://fakestoreapi.com/products';

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

let initialState= {
  cartItems: [],
  products: [],
  totalPrice: 0,
  cartAmount: 0
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [list, setList] = useState(getLocalStorage());

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cartItems]);

  const addToCart = (id) => {
    let check = state.cartItems.find((item) => {
      return item.id === id;
    });
    if (check) {
      return;
    } else {
      dispatch({ type: 'ADD_CART', payload: id });
    }
  };

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem('list', JSON.stringify(data))
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    if (list) {
      dispatch({ type: 'PRODUCT_DATA', payload: list });
    } else {
      dispatch({ type: 'NO_DATA', payload: [] });
    }
    setLoading(false);
  }, [list]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        clearCart,
        remove,
        increase,
        decrease,
        addToCart,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
