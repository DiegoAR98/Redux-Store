import { combineReducers } from 'redux';
import { productsReducer } from './features/products/productsReducer';
import { cartReducer } from './features/cart/cartReducer';
import { categoriesReducer } from './features/categories/categoriesReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});