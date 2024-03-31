import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
  } from './actions';
  
  const initialState = {
    products: [],
    categories: [],
    currentCategory: '',
  };
  
  export const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return [...action.products];
      default:
        return state;
    }
  };